export default function AppHeader({ html }) {
  return html`
<style>
:host {
    grid-area: header;
    position: sticky;
    top: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 14px;
    height: var(--header-h);
    apadding: 0 clamp(16px, 4vw, 32px);
    overflow-x: clip;
}
</style>
<site-container>
    <jelly-card size="small" class="mbs0" style="--jelly-card-padding-block: 8px;">
    <header class="flex flex-row-lg align-items-center justify-content-between gap0 leading1">
        <div class="flex flex-row-lg align-items-center justify-content-between gap0 leading1">
            <div>
                Eye App
            </div>
            <app-nav></app-nav>
        </div>
        <jelly-button size="small">Submission</jelly-button>
    </header>
    </jelly-card>
</site-container>
`
//style="--jelly-card-padding-block: 5px; --jelly-card-padding-inline: 5px;"
}
