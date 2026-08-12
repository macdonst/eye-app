export default function AppFooter({ html, state }) {
  const { store = {} } = state
  const { pageTitle } = store
  return html`
<style>
    :host {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<footer class="p0">
    <jelly-card size="small">
        <jelly-button size="small" shape="square" ${pageTitle !== 'Home' && 'variant="graphite"'} data-link="/">Home</jelly-button>
        <jelly-button size="small" shape="square" ${pageTitle !== 'Articles' && 'variant="graphite"'} data-link="/articles">Articles</jelly-button>
        <jelly-button size="small" shape="square" ${pageTitle !== 'Cases' && 'variant="graphite"'} data-link="/cases">Cases</jelly-button>
        <jelly-button size="small" shape="square" ${pageTitle !== 'Atlas' && 'variant="graphite"'} data-link="/atlas">Atlas</jelly-button>
        <jelly-button size="small" shape="square" ${pageTitle !== 'About Us' && 'variant="graphite"'} data-link="/about">About Us</jelly-button>
    </jelly-card>
</footer>
`
}
