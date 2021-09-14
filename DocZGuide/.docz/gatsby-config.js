const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Documentation',
    description: 'This is documentation site built using Docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Documentation',
        description: 'This is documentation site built using Docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation',
          templates:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz',
          cache:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\.cache',
          app:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\app',
          appPackageJson:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\package.json',
          appTsConfig:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\app\\index.html',
          db:
            'C:\\Users\\default.LAPTOP-A2VTF9HN\\Desktop\\DoczDocumentation\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
