# react_tutolial_typescript
勉強メモ

プロジェクトの作成
```
yarn create vite react_tutolial_typescript
```
確認
```
cd react_tutolial_typescript
yarn
yarn dev
```
vite.config.jsを修正
```diff
export default defineConfig({
+  base: process.env.GITHUB_PAGES
+    ? "react_tutolial_typescript"
+    : "./",
  plugins: [react()],
});
```
公開フォルダに自動でコピーするようにpackage.jsonを修正
```diff
  "scripts": {
    "dev": "vite",
-   "build": "tsc && vite build",
+   "build": "tsc && vite build && shx cp -r dist docs",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
一度ビルド
```
yarn build
```
gitの設定
```
git init
git remote add origin https://github.com/kammysakulove/react_tutorial_typescript
git pull origin main
git add .
git commit -m "Initial Commit"
git push origin main
```