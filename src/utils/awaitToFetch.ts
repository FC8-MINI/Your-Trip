/*
  Inspired by await-to-js
  https://github.com/scopsy/await-to-js
*/

export default async function to<T, E>(promise: Promise<Response>): Promise<[E, null] | [null, T]> {
  try {
    const response = await promise;
    const data = await response.json();
    const result: [null, T] = [null, data];

    return result;
  } catch (error) {
    if (error instanceof Error) {
      return [error as E, null];
    }

    return [
      {
        result: {
          resultCode: "UNKNOWN_ERROR",
          resultMessage: "error",
          resultDescription: "알 수 없는 오류가 발생했습니다.",
        },
      } as E,
      null,
    ];
  }
}
