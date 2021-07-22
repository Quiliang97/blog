const moment = require('moment');



module.exports = {
    title: "海阔凭鱼跃",
    description: "天高任鸟飞",
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment

                    moment.locale(lang)
                    return moment(timestamp).fromNow("LLLL")
                }
            }
        ]
    ],
    head: [
        ['link', { rel: 'icon', href: '/android-chrome-192x192.png' }],
        ['mata', { name: 'author', content: '浔阳江头夜送客,枫叶荻花秋瑟瑟 ' }],
        ['mata', { name: 'keywords', content: '浔阳江头夜送客,枫叶荻花秋瑟瑟 ' }]
    ],

    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/playing.gif',

        nav: [

            { text: 'Home', link: 'about' },
            { text: 'Guide', link: '/' },
            { text: 'External', link: '/' },
            {
                text: 'Languages',
                items: [
                    {
                        text: '分组1', items: [{ text: '中文', link: '/' },
                        { text: '日文', link: '/' }]
                    },
                    {
                        text: '分组2', items: [{ text: '德文', link: '/' },
                        { text: '法文', link: '/' }]
                    }
                ]
            }


        ],
        sidebar: "auto"

    }

}
