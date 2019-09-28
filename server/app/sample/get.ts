import Sample from '../../models/Sample';

/**
 * Fetches the longText from the `Sample` model, or returns null if no
 * entry exists.
 */
export async function getSample(myNumber: number, myShortString: string) {
  const sample = await Sample.findOne({ where: { myNumber, myShortString } });
  if (sample === null) {
    return { success: true, data: null };
  }

  return { success: true, data: sample.myLongText };
}
