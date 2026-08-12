export default function SiteContainer({ html }) {
  return html`
    <style>
      :host {
        display: block;
        inline-size: 90vw;
        max-inline-size: 1440px;
        margin-inline: auto;
      }
    </style>
    <slot></slot>
  `
  //      "site-width": "90vw",
  //    "site-max-width": "1440px",
}
