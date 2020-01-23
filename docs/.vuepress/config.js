module.exports = {
    title: 'FZU OOP 2020',
    description: '福州大学 2020 年面向对象程序设计作业集散仓库',
    serviceWorker: false,
    themeConfig: {
        repo: 'jihuayu/FZU-OOP-2020',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/': {
                nav: [
                    {
                        text: '班级博客',
                        link: 'https://edu.cnblogs.com/campus/fzu/2020OOP'
                    }
                ],
                sidebar: [
                    '使用手册',
                    '课程要求',
                    {
                        title: '作业',
                        collapsable: true,
                        children: [
                            '/works/work0',
                            '/works/work1'
                        ]
                    },
                    {
                        title: '思考题',
                        collapsable: true,
                        children: [
                            '/thinks/think0121',
                            '/thinks/think0122',
                            '/thinks/think0123',

                        ]
                    },
                    '/tips'
                ]
            }
            
        }
    }
}
