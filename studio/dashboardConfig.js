export default {
  widgets: [
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
                  buildHookId: '5ebbfbed66e83cc711bda7c2',
                  title: 'Sanity Studio',
                  name: 'nicklewis-digital-studio-yv8tgd69',
                  apiId: '0048796a-2965-4c5f-8aa0-786e57fee375'
                },
                {
                  buildHookId: '5ebbfbecd4d5821410ad083c',
                  title: 'Blog Website',
                  name: 'nicklewis-digital',
                  apiId: 'ff60d9af-8eb9-4f2c-b463-c9377bb7085e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/nicklewis-digital',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nicklewis-digital.netlify.app', category: 'apps'}
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
