import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Type Lodash',
  description: '参考 lodash 写的类型库',
  head: [],
  themeConfig: {
    nav: [
      { text: 'GitHub', link: '/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Array',
          children: [
            {
              text: 'test',
              link: 'api/array/index',
            }
          ],
        },
        {
          text: 'Collection',
          children: [],
        },
        {
          text: 'Date',
          children: [],
        },
        {
          text: 'Function',
          children: [],
        },
        {
          text: 'Lang',
          children: [],
        },
        {
          text: 'Math',
          children: [],
        },
        {
          text: 'Number',
          children: [],
        },
        {
          text: 'Object',
          children: [],
        },
        {
          text: 'Seq',
          children: [],
        },
        {
          text: 'String',
          children: [],
        },
        {
          text: 'Util',
          children: [],
        },
      ],
    },
  },
})
