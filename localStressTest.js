function generateURL(context, event, done) {
  Math.random() > 0.5 ? 
    context.vars.path = `home${Math.ceil(Math.random() * 10000000)}` :
    context.vars.path = `${Math.ceil(Math.random() * 10000000)}`;
  return done();
}

module.exports = { generateURL };
