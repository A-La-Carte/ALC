import express from 'express';

const router = express.Router();

router.get('*', (req, res) => {
  // Render views/index.ejs
  res.render('index');
});

export default router;
