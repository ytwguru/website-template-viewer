import express from 'express';
import config from 'config';
import path from 'path';

const startCDN = async () => {
  const app = express();
  app.use('/images', express.static(path.join(__dirname, './../cdn/images')))

  const host = config.get<string>("cdn.host");
  const port = config.get<string>("cdn.port");
  const scheme = config.get<string>("cdn.scheme");
  app.listen(
    { port },
    (): void => console.log(`CDN is now running on ${scheme}://${host}${port? ":"+port : ""}`));
}

startCDN();