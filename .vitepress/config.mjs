import { defineConfig } from 'vitepress'

const currentYear = (() => {
  try {
    return new Date().getFullYear();
  } catch (e) {
    console.warn('Failed to get current year', e);
    return 2026;
  }
})();

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
          { text: '下载程序', link: '/download/' },
        ],
        footer: {
          copyright: `Copyright © 2019 - ${currentYear} Vilinko Studio. All Rights Reserved.`,
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
          { text: 'Download', link: '/en/download/' },
        ],
        footer: {
          copyright: `Copyright © 2019 - ${currentYear} Vilinko Studio. All Rights Reserved.`,
          message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">粤ICP备2025454076号</a>'
        },
        langMenuLabel: 'Switch Language',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to Light Mode',
        darkModeSwitchTitle: 'Switch to Dark Mode',
        sidebarMenuLabel: 'Menu',
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