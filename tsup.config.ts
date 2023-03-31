import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    entry: [
        'src/bin/start.ts'
    ],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    minify: true
});
