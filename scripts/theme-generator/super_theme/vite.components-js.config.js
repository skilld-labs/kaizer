import { defineConfig } from 'vite';
import { jsBuild } from './vite.globals-config';

export default defineConfig(jsBuild('templates/components'));