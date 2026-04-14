import { defineConfig } from 'vitepress'

// 定义 createSidebar 函数，根据语言返回侧边栏配置
function createSidebar(lang) {
  // 可根据 lang 返回不同语言的 sidebar，此处先返回空数组作为占位
  return []
}

export default defineConfig({
  base: "",
  title: "Vilinko Support",
  description: "Vilinko Studio 用户支持中心，提供多种渠道的用户支持方式，帮助解决问题",
  keywords: 'Vilinko Studio,支持,产品,服务,用户,Vilinko,vertillusion,lightframe,lfs,vinaui,vui,support',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.vilinko.com/img/Newico.png' }]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '下载程序', link: '/download/index' },
        ],
        footer: {
          copyright: 'Copyright © 2019 - 2026 Vilinko Studio. All Rights Reserved.',
          message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">粤ICP备2025454076号</a>'
        },
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        docFooter: { prev: '上一篇', next: '下一篇' },
          
        // 导航和侧边栏
        sidebar: createSidebar('zh'),
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Download', link: '/en/download/index' },
        ],
        footer: {
          copyright: 'Copyright © 2019 - 2026 Vilinko Studio. All Rights Reserved.',
          message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">粤ICP备2025454076号</a>'
        },
        langMenuLabel: 'Switch Language',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to Light Mode',
        darkModeSwitchTitle: 'Switch to Dark Mode',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to Top',
        docFooter: { prev: 'Previous', next: 'Next' },
        onThisPage: 'On This Page',
        sidebar: createSidebar('en'),
      }
    }
  },

  themeConfig: {
    sidebar: false,
  },
})