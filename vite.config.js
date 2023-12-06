// export default {
//     root: "src",
//     build: {
//         outDir: "../public",
//     }
// }

import { defineConfig } from 'vite';
import hljs from 'highlight.js';

export default defineConfig({
  root: "src",
  build: {
    outDir: "../public",
    rollupOptions: {
      plugins: [
        {
          name: 'highlight',
          transform(code, id) {
            if (/\.vue\./.test(id)) {
              const highlighted = hljs.highlightAuto(code).value;
              return {
                code: `<pre><code class="hljs">${highlighted}</code></pre>`,
                map: null,
              };
            }
          },
        },
      ],
    },
  },
});