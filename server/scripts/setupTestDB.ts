import requireDir from 'require-dir';
import db from '../libs/db';

requireDir('../models');

async function main() {
  for (const curDb of [db]) {
    await curDb
      .query('SET FOREIGN_KEY_CHECKS = 0')
      .then(() => curDb.sync({ logging: console.log, force: true }))
      .then(() => curDb.query('SET FOREIGN_KEY_CHECKS = 1'))
      .then(() => {
        console.log('Done');
      })
      .catch((err: Error) => {
        console.error('Ran into error while creating databases');
        console.error(err.stack);
      });
  }

  await db.close();
}

main();
