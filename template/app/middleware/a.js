

export default async (ctx, next) => {
  console.log('from middleware')
  await next();
} 