module.exports = {
  enableAbbreviatedMetadata: true,
  customRegistryMiddlewares: [
    async (ctx, next) => {

      console.log('---- from dev config');
      ctx.set('x-custom-middleware', 'true');
      await next()
    }
  ]
}