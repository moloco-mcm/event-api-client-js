import { AxiosFn, Context, TranslationFn } from '../types';
import { apiFn } from '../utils';
import { InsertEventParams, InsertEventHttpRequestBody } from './types';
import { translateInsertEventParamsToInsertEventRequestBody } from './utils';

const insertEvent: AxiosFn<InsertEventParams, InsertEventHttpRequestBody> = (
  args
) => {
  const {
    params,
    context: { axios, platformId },
  } = args;

  const data: InsertEventHttpRequestBody =
    translateInsertEventParamsToInsertEventRequestBody(params);

  return axios.request({
    method: 'POST',
    url: `/platforms/${platformId}/userevents`,
    data,
  });
};

const translatePostInsertEventResponse: TranslationFn<
  InsertEventParams,
  InsertEventHttpRequestBody,
  void
> = () => {
  return;
};

export const events = (context: Context) => ({
  insertEvent: apiFn(context, insertEvent, translatePostInsertEventResponse),
});

export default events;
