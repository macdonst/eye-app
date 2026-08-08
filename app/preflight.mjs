export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Home',
    '/articles': 'Articles',
    '/cases': 'Cases'
  }

  return titleMap[path]
}
