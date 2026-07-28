import { defineConfig, esmExternalRequirePlugin } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { resolve } from "node:path";
import dts from "unplugin-dts/vite";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    process.env.VERCEL !== "1" &&
      dts({ bundleTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    mode === "development" && babel({ presets: [reactCompilerPreset()] }),
    mode === "development" &&
      checker({
        typescript: {
          buildMode: true,
          tsconfigPath: "./tsconfig.app.json",
        },
        // not working in build mode its getting hang
        eslint: {
          useFlatConfig: true,
          watchPath: "./src/**/*.{js,jsx,ts,tsx}",
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        },
      }),
  ],
  build:
    process.env.VERCEL !== "1"
      ? {
          lib: {
            entry: resolve(import.meta.dirname, "lib/main.ts"),
            name: "MuiTable",
            fileName: "mui-table",
            formats: ["es", "cjs"],
          },
          rolldownOptions: {
            external: [
              "react",
              "react-dom",
              "@mui/material",
              "@mui/icons-material",
              "@emotion/react",
              "@emotion/styled",
              "@abhishekzambare/animate",
            ],
            plugins: [
              esmExternalRequirePlugin({
                external: [/^react(-dom)?(\/.+)?$/],
              }),
            ],
          },
        }
      : {},
}));
