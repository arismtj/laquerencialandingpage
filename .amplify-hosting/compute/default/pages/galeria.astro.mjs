/* empty css                                    */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BwltwzaZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B24tg3My.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galeria", "data-astro-cid-tvv6smhg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-galeria" data-astro-cid-tvv6smhg></div> ` })} `;
}, "D:/proyectos/laquerenciahotelbooking/hotelquerencia_astro/src/pages/galeria.astro", void 0);

const $$file = "D:/proyectos/laquerenciahotelbooking/hotelquerencia_astro/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
