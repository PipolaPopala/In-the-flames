import './bootstrap';
import '../assets/main.scss';

import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import LayoutAdventure from './Layouts/LayoutAdventure.vue';

createInertiaApp({
    title: title => `In the flames ${title}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || LayoutAdventure
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(createPinia())
            .component('Head', Head)
            .component('Link', Link)
            .mount(el)
    },
    progress: {
        delay: 0, // The delay after which the progress bar will appear, in milliseconds...
        color: '#fff', // The color of the progress bar...
        includeCSS: true, // Whether to include the default NProgress styles...
        showSpinner: false, // Whether the NProgress spinner will be shown...
    },
})
