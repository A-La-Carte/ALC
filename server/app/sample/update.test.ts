import { updateSample } from './update';
import * as FakeData from '../../../tests/FakeData';
import Sample from '../../models/Sample';

describe(updateSample.name, () => {
  // Note - these tests are idempotent, so don't assume any state and can be
  // run repeatedly

  it('creates a new sample', async () => {
    // Ensure nothing exists
    await Sample.destroy({ where: { myNumber: 12, myShortString: 'Short' } });
    let fetchedSample = await Sample.findOne({
      where: { myNumber: 12, myShortString: 'Short' },
    });
    expect(fetchedSample).toBeNull();

    // Create the new sample
    await updateSample(12, 'Short', 'A longer string');

    // Check it matches what we want
    fetchedSample = await Sample.findOne({
      where: { myNumber: 12, myShortString: 'Short' },
    });

    expect(fetchedSample).not.toBeNull();
    // Do this using an if statement so that Typescript knows that
    // fetcheSample isn't null for the rest of the function
    if (fetchedSample === null) return;

    expect(fetchedSample.myNumber).toBe(12);
    expect(fetchedSample.myShortString).toBe('Short');
    expect(fetchedSample.myLongText).toBe('A longer string');
  });

  it('updates an existing sample with given data', async () => {
    // Make a random sample
    const origSample = await FakeData.makeDBSample();
    const { myNumber, myShortString } = origSample;

    // Update the sample with a new long text
    await updateSample(myNumber, myShortString, 'A new long string');
    const fetchedSample = await Sample.findOne({
      where: { myNumber, myShortString },
    });

    expect(fetchedSample).not.toBe(null);
    // Do this using an if statement so that Typescript knows that
    // fetcheSample isn't null for the rest of the function
    if (fetchedSample === null) return;

    expect(fetchedSample.myNumber).toBe(myNumber);
    expect(fetchedSample.myShortString).toBe(myShortString);
    expect(fetchedSample.myLongText).toBe('A new long string');
  });
});
