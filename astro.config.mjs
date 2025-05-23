// @ts-check
import { defineConfig } from 'astro/config';

import amplify from 'astro-aws-amplify';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import node from '@astrojs/node';

export default defineConfig({
  // ...
  output:'server',
  
  integrations: [tailwind(), react()],

  adapter: amplify()

});