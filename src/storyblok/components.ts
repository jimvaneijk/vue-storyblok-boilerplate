import { Plugin } from 'vue';

export default {
    install: (app) => {
        const modules = import.meta.glob('@/components/**/*.vue');

        for (const path in modules) {
            modules[path]().then((mod: { default: any }) => {
                // Extract the component name from the file path
                const componentName = path
                    // Remove the "./components/" from the beginning
                    .replace('src/components/', '')
                    // Remove the file extension from the end
                    .replace(/\.\w+$/, '')
                    // Split up kebabs and slashes
                    .split(/[-/]/)
                    // Convert to PascalCase (CamelCase with the first letter capitalized)
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    // Concatenate
                    .join('');

                // Globally register the component
                app.component(componentName, mod.default);
            });
        }
    },
} as Plugin;
