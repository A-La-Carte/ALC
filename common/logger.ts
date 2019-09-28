import { AxiosError } from 'axios';

/** Log an error, including the HTTP request/response data if relevant */
export function logError(
  loggerFunc: Function,
  err: AxiosError | Error,
  storytime?: Object,
) {
  const axiosError = err as AxiosError;
  const dbError = err as any;
  if (axiosError.response) {
    const response = axiosError.response;
    loggerFunc(
      err.stack,
      Object.assign(
        {},
        storytime,
        response.config
          ? {
              url: response.config.url,
              params: response.config.params,
              response: response.data,
              // Don't log POST data or headers: more sensitive
            }
          : {},
      ),
    );
  } else {
    loggerFunc(err.stack, {
      ...storytime,
      ...(dbError.sql ? { sql: dbError.sql } : {}),
      ...(typeof dbError.message === 'function'
        ? { dbMessage: dbError.message() }
        : {}),
    });
  }
}
