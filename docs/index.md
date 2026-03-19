---
prev: false
next: false
---

# 常见问题

## DLL 文件缺失
::: details 无法启动程序，因为计算机中丢失 MSVCP140.dll（0xc000007b 报错）
此问题通常是由于缺少 **Microsoft Visual C++ Redistributable** 组件所致。我们为您提供了两种解决方案，若无法解决您的问题，请您尝试在微软社区寻求帮助。

### 方法一：安装最新的 Microsoft Visual C++ Redistributable
**<u>MSVCP140.dll 是 Visual C++ Redistributable for Visual Studio 2015-2022 的组成部分，安装该组件可从根本上解决问题。</u>**

1. 访问 [Microsoft Visual C++ Redistributable for Visual Studio 2015-2022](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170) 页面。
2. 根据您的系统架构（32 位或 64 位）选择对应的版本并下载。对于 64 位操作系统，选择 vc_redist.x64.exe；对于 32 位操作系统，选择 vc_redist.x86.exe。
3. 下载完成后，双击运行安装程序
4. 在用户账户控制对话框中，点击 "是" 授予权限
5. 勾选 "我同意许可条款和条件"，然后点击 "安装"
6. 等待安装完成，然后重启计算机

### 方法二：执行系统文件完整性检查
如果安装组件后问题仍然存在，可使用系统自带工具检查并修复系统文件：

1. 按下 `Win + R` 组合键，打开 "运行" 对话框，输入以下命令，然后按 Enter 键：
```cmd
sfc /scannow
```
2. 系统将开始扫描并修复受损的系统文件，请耐心等待过程完成
3. 扫描结束后，重启计算机

### 常见问题处理
- 若提示 "已安装更高版本"，选择 "修复" 选项而非卸载
- 若安装失败，确保您的 Windows 系统已更新至最新版本
- 若问题持续存在，建议从微软官方网站获取进一步支持
:::

## Webview 相关
::: details 运行时缺少 Edge Webview2
Vilinko Studio 提供的部分程序可能需要 Webview 来运行，若您的电脑上未安装相关 Webview ，可能导致我们的程序无法正常工作。推荐您在 Microsoft 官方网站安装 MicrosoftEdgeWebview2 程序。

https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/#download

:::

## 程序和网页兼容性
::: details 运行在 HarmonyOS NEXT 系统上出现 API 版本过高运行失败的错误
Vilinko Studio 提供的鸿蒙应用适用于 HarmonyOS 6 及以上、API ≥ 20 的机型，若您的系统未升级到相关版本，可能无法使用我们的产品，我们推荐您在系统版本为 6.0.0.130 及以上的设备上安装和运行程序。  
若您选择使用 .hap 包自行编译安装，请尝试更改 `build-profile.json5` 文件中的 `compatibleSdkVersion` 值。
:::

## 程序安装相关
::: details Windows SmartScreen 显示未知程序或显示程序可能含有病毒
Vilinko Studio 致力于为用户提供安全、可靠的服务。我们的应用程序已通过第三方安全检测平台 [VirScan](https://www.virscan.org) 和 [VirusTotal](https://www.virustotal.com/gui/) 的全面扫描，结果显示未发现病毒或任何可疑文件行为。鉴于当前资金条件限制，Vilinko Studio 暂未配备代码签名证书，对此可能带来的不便，我们深表歉意。我们将持续提升安全合规能力，在条件成熟后尽快完善相关认证体系，为用户提供更加完善的信任保障。

[点击此处助力我们提升合规能力](https://afdian.com/a/EnderMo)
:::