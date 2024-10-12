import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import type { ToolsRouter } from '@/server/routers/tools';

export const toolsClient = createTRPCClient<ToolsRouter>({
  links: [
    httpBatchLink({
      transformer: superjson,
      url: '/trpc/tools',
    }),
  ],
});
