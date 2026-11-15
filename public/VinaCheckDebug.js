(function () {
  'use strict';

  var CONFIG = {
    MAX_LOGS: 1000,           // 日志池最大条数
    MAX_DISPLAY_LENGTH: 500,  // alert 中错误文本最大展示字符数
    REFRESH_DELAY_MS: 1200    // 点击确定后延迟多少毫秒刷新
  };

  var logEntries = [];        // 全部日志
  var pendingMessages = [];   // 等待弹出提示的错误信息
  var isAlerting = false;     // 是否正在显示 alert（防止重复弹出）
  var confirmed = false;      // 用户已点击确定，等待刷新

  var nativeConsole = {};
  var CONSOLE_LEVELS = ['log', 'info', 'warn', 'error', 'debug'];

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function timestamp() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
      ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) +
      '.' + pad(d.getMilliseconds());
  }

  function formatValue(val) {
    if (typeof val === 'string') return val;
    if (val instanceof Error) {
      return val.stack || (val.name + ': ' + val.message);
    }
    try {
      return JSON.stringify(val, function (key, v) {
        if (typeof v === 'function') return '[Function]';
        if (v instanceof Error) return v.stack || (v.name + ': ' + v.message);
        return v;
      });
    } catch (e) {
      try { return String(val); } catch (e2) { return '[无法序列化的值]'; }
    }
  }

  function formatArgs(args) {
    var parts = [];
    for (var i = 0; i < args.length; i++) {
      parts.push(formatValue(args[i]));
    }
    return parts.join(' ');
  }

  function addLog(level, message) {
    logEntries.push({ time: timestamp(), level: level, message: message });
    if (logEntries.length > CONFIG.MAX_LOGS) {
      logEntries.shift();
    }
  }

  CONSOLE_LEVELS.forEach(function (level) {
    nativeConsole[level] = console[level];

    console[level] = function () {
      var args = Array.prototype.slice.call(arguments);
      var message = formatArgs(args);

      addLog(level, message);

      try {
        nativeConsole[level].apply(console, args);
      } catch (e) { /* 忽略 */ }

      if (level === 'error') {
        handleError(message);
      }
    };
  });

  window.addEventListener('error', function (e) {
    if (e.target && e.target !== window && e.target.nodeType) {
      var url = e.target.src || e.target.href || e.target.currentSrc || '';
      var resMsg = '资源加载失败: ' + (url || e.target.tagName || '未知资源');
      addLog('error', resMsg);
      handleError(resMsg);
      return;
    }

    var msg = e.error ? formatValue(e.error) : (e.message || '未知脚本错误');
    if (e.filename) {
      msg += ' (位置: ' + e.filename + ':' + (e.lineno || 0) + ':' + (e.colno || 0) + ')';
    }
    addLog('error', msg);
    handleError(msg);
  }, true);

  window.addEventListener('unhandledrejection', function (e) {
    var reason = e.reason;
    var msg = 'Promise 未捕获拒绝: ' + formatValue(reason);
    addLog('error', msg);
    handleError(msg);
  });

  function handleError(message) {
    if (confirmed) return;

    pendingMessages.push(message);

    if (isAlerting) return;

    setTimeout(showAlert, 0);
  }

  function showAlert() {
    if (isAlerting) return;
    if (confirmed) return;
    if (pendingMessages.length === 0) return;

    isAlerting = true;

    var text = pendingMessages.join('\n\n');
    pendingMessages = [];

    if (text.length > CONFIG.MAX_DISPLAY_LENGTH) {
      text = text.slice(0, CONFIG.MAX_DISPLAY_LENGTH) + '\n...(完整内容见下载的日志文件)';
    }

    var alertText = '页面发生错误：\n\n' + text +
      '\n\n点击「确定」后将下载控制台日志并自动刷新页面。';

    try {
      window.alert(alertText);
    } catch (e) {
    }

    isAlerting = false;

    if (pendingMessages.length > 0 && !confirmed) {
      showAlert();
    } else if (!confirmed) {
      confirmed = true;
      downloadLogs();
      setTimeout(function () {
        try {
          window.location.reload();
        } catch (e) {
          window.location.href = window.location.href;
        }
      }, CONFIG.REFRESH_DELAY_MS);
    }
  }

  function downloadLogs() {
    var lines = [];
    lines.push('========= 控制台日志导出 =========');
    lines.push('导出时间: ' + timestamp());
    lines.push('页面地址: ' + (window.location ? window.location.href : ''));
    lines.push('用户代理: ' + (navigator && navigator.userAgent ? navigator.userAgent : ''));
    lines.push('==================================');
    lines.push('');

    if (logEntries.length === 0) {
      lines.push('(无日志记录)');
    } else {
      for (var i = 0; i < logEntries.length; i++) {
        var entry = logEntries[i];
        lines.push('[' + entry.time + '] [' + entry.level.toUpperCase() + '] ' + entry.message);
      }
    }

    var text = lines.join('\n');
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'console-log-' + timestamp().replace(/[:.\s]/g, '-') + '.txt';
    a.style.display = 'none';
    (document.documentElement || document.body).appendChild(a);
    a.click();

    setTimeout(function () {
      try {
        a.parentNode && a.parentNode.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) { /* 忽略 */ }
    }, 600);
  }
})();