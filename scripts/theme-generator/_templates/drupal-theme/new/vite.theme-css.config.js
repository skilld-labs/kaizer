---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/vite.theme-css.config.js
---
import { defineConfig } from 'vite';
import { cssBuild } from './vite.globals-config';

export default defineConfig(cssBuild('css'));
