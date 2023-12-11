import express from 'express';
import router from './routers';
import cors from 'cors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota

    this.app.get('/', (_req, res) => res.json({ ok: true }));
    this.app.get('/test', (_req, res) => res.json({ ok: 'teste' }));
    // this.app.use(router);
  }

  // private routes(): void {
  //   this.app.use(router);
  // }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(router);
    this.app.use(cors())
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
//
export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
