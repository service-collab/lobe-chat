import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const getToolsConfig = () => {
  return createEnv({
    runtimeEnv: {
      SEARXNG_URL: process.env.SEARXNG_URL || 'https://searx.tiekoetter.com/',
    },

    server: {
      SEARXNG_URL: z.string().url(),
    },
  });
};

export const toolsEnv = getToolsConfig();
