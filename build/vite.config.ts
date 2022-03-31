import path from "path";
import { defineConfig } from "vite";
import postcssLit from "rollup-plugin-postcss-lit";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "../src/lib.ts"),
            formats: ["es"],
            name: "Ice"
        },
        outDir: "lib",
        rollupOptions: {
            external: ["lit"],
            output: {
                globals: {
                    lit: "Lit"
                }
            }
        }
    },
    plugins: [
        postcssLit(),
    ]
})