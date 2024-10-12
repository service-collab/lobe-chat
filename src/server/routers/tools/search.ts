import { z } from 'zod';

import { toolsEnv } from '@/config/tools';
import { authedProcedure, router } from '@/libs/trpc';
import { SearXNGClient } from '@/server/modules/SearXNG';

export const searchRouter = router({
  query: authedProcedure
    .input(
      z.object({
        query: z.string(),
        searchEngine: z.array(z.string()).optional(),
      }),
    )
    .query(async ({ input }) => {
      const client = new SearXNGClient(toolsEnv.SEARXNG_URL);

      return await client.search(input.query, input.searchEngine);
    }),
});
