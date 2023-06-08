---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/vite.components-js.config.js
---
import { defineConfig } from 'vite';
import { jsBuild } from './vite.globals-config';

export default defineConfig(jsBuild('templates/components'));
