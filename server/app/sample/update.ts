import Sample from '../../models/Sample';

export async function updateSample(
  myNumber: number,
  myShortString: string,
  myLongText: string,
) {
  await Sample.upsert({ myNumber, myShortString, myLongText });

  return {
    success: true,
  };
}
