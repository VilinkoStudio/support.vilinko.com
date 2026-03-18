import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "",
  title: "Vilinko Support",
  description: "Vilinko Studio 用户支持中心，提供多种渠道的用户支持方式，帮助解决问题",
  keywords: 'Vilinko Studio,支持,产品,服务,用户,Vilinko,vertillusion,lightframe,lfs,vinaui,vui,support',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
        ],
        footer: {
          copyright: 'Copyright © 2019 - 2026 Vilinko Studio. All Rights Reserved.',
          message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">粤ICP备2025454076号</a>'
        },
        // 添加中英文切换配置
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        docFooter: { prev: '上一篇', next: '下一篇' },
        onThisPage: '本页内容',
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        footer: {
          copyright: 'Copyright © 2019 - 2026 Vilinko Studio. All Rights Reserved.',
          message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">粤ICP备2025454076号</a>'
        },
        // 添加英文配置
        langMenuLabel: 'Switch Language',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to Light Mode',
        darkModeSwitchTitle: 'Switch to Dark Mode',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to Top',
        docFooter: { prev: 'Previous', next: 'Next' },
        onThisPage: 'On This Page',
      }
    }
  },

  themeConfig: {
    sidebar: false,
  },
})