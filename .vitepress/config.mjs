import { defineConfig } from 'vitepress'

function createSidebar(lang) {
  return []
}

const currentYear = new Date().getFullYear();

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

    socialLinks: [
      { icon: 'xiaohongshu', link: 'https://www.xiaohongshu.com/user/profile/68fa354900000000320280e5' },
      { icon: 'qq', link: 'https://pd.qq.com/g/csm3ip9s49' },
      { icon: 'wechat', link: 'https://support.vilinko.com/wechat.htm' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Docs</title><path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/></svg>'
        },
        link: 'https://docs.vilinko.com'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>'
        },
        link: 'https://support.vilinko.com/email.htm'
      }
    ],
  },
})