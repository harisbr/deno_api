import { Application, isHttpError } from 'https://deno.land/x/oak/mod.ts';
import router from './router.ts';
import { HOST, PORT } from './config/config.ts';

const app = new Application();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case 404:
          ctx.response.status = 404;
          ctx.response.body = { msg: 'Requested resource can not be found' };
          break;
        default:
          ctx.response.status = 400;
          ctx.response.body = { msg: 'Request can not be processed currently' };
      }
    } else {
      ctx.response.status = 500;
      ctx.response.body = { msg: 'Something went wrong' }
    }
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx => {
  ctx.response.body = 'Hello World';
});

console.log(`Listening on port: ${PORT}`);

await app.listen(`${HOST}:${PORT}`);

