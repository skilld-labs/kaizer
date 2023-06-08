---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/vite.theme-js.config.js
---
import { defineConfig } from 'vite';
import { jsBuild } from './vite.globals-config';

export default defineConfig(jsBuild('js'));
