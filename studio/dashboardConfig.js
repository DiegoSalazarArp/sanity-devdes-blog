export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '636da456a712bf68d9af8af5',
                  title: 'Sanity Studio',
                  name: 'sanity-devdes-blog-studio',
                  apiId: '38be946b-2125-4dcc-9c32-1a59e97b6aa4'
                },
                {
                  buildHookId: '636da456ac518567480f0210',
                  title: 'Blog Website',
                  name: 'sanity-devdes-blog',
                  apiId: 'ae8fab0b-fc8f-41c0-a411-c4055b268137'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DiegoSalazarArp/sanity-devdes-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-devdes-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
