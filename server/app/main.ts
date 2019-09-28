import { Express } from 'express';
import index from './index';
import echo from './echo';
import sample from './sample';

function loadRoutes(app: Express) {
  app.use('/api/echo', echo);
  app.use('/api/sample', sample);
  app.use('*', index);

  return app;
}

export default loadRoutes;
