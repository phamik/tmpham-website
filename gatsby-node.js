const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

/**
 * Remove the / from the beginning and the end of the sent path
 *
 * @param {String} path
 * @returns String return the path with / at the beginning
 */
const organizeSlash = path => {
  return path ? `/${path.replace(/^\/|\/$/g, "")}` : ""
}

// Initializing required directories
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()
  const dirs = [
    path.join(program.directory, "src/images"),
    path.join(program.directory, "src/utils"),
  ]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

// Add the basePath to each theme page
exports.onCreatePage = ({ page, actions }, themeOptions) => {
  let { basePath } = themeOptions
  const components = [
    "ComponentAboutMe",
    "ComponentIndex",
    "ComponentSkills",
  ]

  if (
    basePath &&
    /pages/g.test(page.componentPath) &&
    components.includes(page.internalComponentName)
  ) {
    const { createPage, deletePage } = actions
    deletePage(page)

    basePath = organizeSlash(basePath)
    page.path = `${basePath}${page.path}`

    createPage({
      ...page,
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }, themeOptions) => {
  const { createNodeField } = actions
  let { basePath } = themeOptions
  basePath = organizeSlash(basePath)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `markdown-pages`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `${basePath}${slug}`,
    })
  }
}

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "https://tien-pham.netlify.app/*", 
    toPath: "https://www.tmpham.com/", 
    isPermanent: true, 
    force: true
  });
};

