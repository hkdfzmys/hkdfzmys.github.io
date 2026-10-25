import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return { base: env.VITE_BASE_PATH || './', plugins: [react(), { name: 'markdown-content-watch', configureServer(server) {
    const dir = resolve('content/posts'); server.watcher.add(dir);
    let timer: ReturnType<typeof setTimeout>;
    const regenerate = (file: string) => { if (!file.replaceAll('\\', '/').includes('/content/posts/') || !file.endsWith('.md')) return;
      clearTimeout(timer); timer = setTimeout(() => { try { execFileSync(process.execPath, ['scripts/generate-posts.mjs', '--drafts'], {stdio:'inherit'}); server.ws.send({type:'full-reload'}); } catch { server.config.logger.error('文章生成失败，请检查 Front Matter。'); } }, 120);
    }; server.watcher.on('add', regenerate).on('change', regenerate).on('unlink', regenerate);
  }}] };
});
