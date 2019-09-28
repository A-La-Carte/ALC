import axios from 'axios';

/**
 * Echos back the string we provide by calling an endpoint
 */
export async function echo(str: string): Promise<string> {
  const response = await axios({
    url: `/api/echo/${encodeURIComponent(str)}`,
  });

  return response.data.data;
}

/**
 * Gets the `myLongText` given the `myNumber` and `myShortString` to do a
 * lookup with
 */
export async function getSample(
  myNumber: number,
  myShortString: string,
): Promise<string> {
  const encodedMyNumber = encodeURIComponent(myNumber.toString());
  const encodedMyShortString = encodeURIComponent(myShortString);

  const response = await axios({
    method: 'GET',
    url: `/api/sample/${encodedMyNumber}/${encodedMyShortString}`,
  });

  return response.data.data;
}

/** Calls the updateSample endpoint */
export async function updateSample(
  myNumber: number,
  myShortString: string,
  myLongText: string,
): Promise<void> {
  const response = await axios({
    method: 'POST',
    url: '/api/sample',
    data: { myNumber, myShortString, myLongText },
  });

  return response.data.data;
}
