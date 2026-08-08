export default function AppHeader({ html }) {
  return html`
<style>
:host div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
div div {
    font: 660 16px / 1 var(--display);
}
</style>
<div>
    <div>
        Eye App
    </div>
</div>
`
}
