import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
      },
      images: {
        extensions: ['jpg', 'jpeg', 'png', 'gif'],
      },
      site: 'https://nguyenq9.github.io'
});
