export default function AppNav({ html }) {
  return html`
<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 6px;
    display: hidden;
  }
  @media screen and (min-width: 48em) {
    /* reset */
    nav {
      display: block;
    }
  }
</style>
<nav>
  <a href="/">Home</a>
  <a href="/articles">Articles</a>
  <a href="/cases">Cases</a>
  <a href="/atlas">Atlas</a>
  <a href="/about">About Us</a>
</nav>
`
}
