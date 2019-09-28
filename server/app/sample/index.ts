import express from 'express';
import { getSample } from './get';
import { updateSample } from './update';

const router = express.Router();

/** Read from the sample table to get the myLongText */
router.get('/:myNumberStr/:myShortString', async (req, res) => {
  const { myNumberStr, myShortString } = req.params;
  const myNumber = parseInt(myNumberStr, 10);
  const response = await getSample(myNumber, myShortString);

  res.json(response);
});

/** Writes to the sample table the myLongText we provide  */
router.post('/', async (req, res) => {
  const { myNumber, myShortString, myLongText } = req.body;
  const response = await updateSample(myNumber, myShortString, myLongText);

  res.json(response);
});

export default router;
