const createApp = require('./index');
const PORT = 3000;

const listenApp = async () => {
  let app
  app = await createApp();
  
  return app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
  });
}

listenApp();