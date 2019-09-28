import { getSample } from './get';
import Sample from '../../models/Sample';

describe(getSample.name, () => {
  it('returns null for a non-existent sample', async () => {
    // Ensure there isn't any entry like this
    await Sample.destroy({
      where: { myNumber: 2e9, myShortString: 'shortstring' },
    });
    const { data } = await getSample(2e9, 'shortstring');
    expect(data).toBeNull();
  });

  it('returns the myLongText for a sample we create', async () => {
    // Ensure there isn't any entry like this
    await Sample.upsert({
      myNumber: 123,
      myShortString: 'mykey',
      myLongText: 'Here is some longer text I expect to get back',
    });
    const { data } = await getSample(123, 'mykey');
    expect(data).toBe('Here is some longer text I expect to get back');
  });
});
