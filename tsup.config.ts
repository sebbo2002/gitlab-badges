import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    dts: true,
    entry: ['src/bin/start.ts'],
    format: ['esm'],
    minify: true,
    sourcemap: true,
});
