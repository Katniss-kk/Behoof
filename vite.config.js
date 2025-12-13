import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000,
        open: true,
    },
    base: "/Behoof/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@app": path.resolve(__dirname, "./src/app"),
            "@Pages": path.resolve(__dirname, "./src/components/Pages"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@assets/*": path.resolve(__dirname, "./src/assets/*"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@image": path.resolve(__dirname, "./public/image"),
        },
    },
});
