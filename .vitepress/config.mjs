import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/support.vilinko.com/",
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
        }
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
        }
      }
    }
  },

  themeConfig: {
    sidebar: false,
  },
  vite: {
    build: {
      rollupOptions: {
        input: {
          email: 'public/email.html'
        }
      }
    }
  }
})