export type ServiceResponseMsg = { message: string };
export type ServiceResponseError = {
  status: 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST' | 'INVALID_VALUE' | 'ERROR';
  data: { message: string };
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESS' | 'CREATED';
  data: T;
};

export type ServiceResponse<Data> = ServiceResponseSuccess<Data> | ServiceResponseError;
