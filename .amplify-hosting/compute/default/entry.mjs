import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BIMOfH29.mjs';
import { manifest } from './manifest_cW5fTcdM.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contacto.astro.mjs');
const _page2 = () => import('./pages/galeria.astro.mjs');
const _page3 = () => import('./pages/habitacion/cuadruple.astro.mjs');
const _page4 = () => import('./pages/habitacion/doble.astro.mjs');
const _page5 = () => import('./pages/habitacion/matrimonial.astro.mjs');
const _page6 = () => import('./pages/habitacion/minidepa.astro.mjs');
const _page7 = () => import('./pages/habitacion/quintuple.astro.mjs');
const _page8 = () => import('./pages/habitacion/sextuple.astro.mjs');
const _page9 = () => import('./pages/habitacion/simple.astro.mjs');
const _page10 = () => import('./pages/habitacion/slider.astro.mjs');
const _page11 = () => import('./pages/habitacion/triple.astro.mjs');
const _page12 = () => import('./pages/habitaciones.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contacto.astro", _page1],
    ["src/pages/galeria.astro", _page2],
    ["src/pages/habitacion/Cuadruple.astro", _page3],
    ["src/pages/habitacion/Doble.astro", _page4],
    ["src/pages/habitacion/Matrimonial.astro", _page5],
    ["src/pages/habitacion/Minidepa.astro", _page6],
    ["src/pages/habitacion/Quintuple.astro", _page7],
    ["src/pages/habitacion/Sextuple.astro", _page8],
    ["src/pages/habitacion/Simple.astro", _page9],
    ["src/pages/habitacion/slider.js", _page10],
    ["src/pages/habitacion/Triple.astro", _page11],
    ["src/pages/habitaciones.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///D:/proyectos/laquerenciahotelbooking/hotelquerencia_astro/.amplify-hosting/static/",
    "server": "file:///D:/proyectos/laquerenciahotelbooking/hotelquerencia_astro/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
