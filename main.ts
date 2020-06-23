import {
  Application
} from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

import mainRouter from './routes/mainRoute.ts';
import userRouter from './routes/userRoute.ts';
import notFound from './routes/404Route.ts';

const app = new Application();

app.use(mainRouter.routes());
app.use(userRouter.routes());
app.use(notFound);

const PORT = +env.APP_PORT || 8000;
console.log(`Listening on port ${PORT}...`);
await app.listen({ port: PORT });
