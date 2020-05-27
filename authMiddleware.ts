import { Context } from 'https://deno.land/x/oak/mod.ts';
import { validateJwt } from 'https://deno.land/x/djwt/validate.ts';
import { JWT_KEY } from './config/config.ts';

const validateToken = async (ctx: Context, next: any) => {
  const jwtToken: string = ctx.request.headers.get('Authorization')
    ? ctx.request.headers.get('Authorization')! : '';
  const isValid = await validateJwt(jwtToken, JWT_KEY, { isThrowing: false });
  if (!isValid) {
    ctx.response.body = { msg: 'Unauthorized' }
    ctx.response.status = 401;
    return;
  }
  await next();
}

export default validateToken;
