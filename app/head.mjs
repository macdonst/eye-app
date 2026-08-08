import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  // Enhance Styles
  // CSS will be included as a <link> tag for local development.
  // For deployments, CSS will be included as a <style> tag in order to eliminate the blocking network request created by <link> tags.
  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${styles}
      <link rel="stylesheet" href="/_public/css/index.css">
      <link rel="stylesheet" href="/_public/css/components.css">
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="The HTML first full stack web framework.">
      <script type="module" src="https://jelly-ui.com/package.js"></script>
      <script type="module" src="/_public/index.js"></script>
    </head>
`
}
