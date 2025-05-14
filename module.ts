import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit';

export default defineNuxtModule({
    meta: {
        name: 'owd-module-template',
    },
    setup() {
        const {resolve} = createResolver(import.meta.url);

        addPlugin({
            src: resolve('./runtime/plugin'),
            mode: 'client'
        })

        /*
        addImportsDir(resolve('./runtime/composables'))
        addImportsDir(resolve('./runtime/stores'))
        addImportsDir(resolve('./runtime/utils'))
        */
    }
})
