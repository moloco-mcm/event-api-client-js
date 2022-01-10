import Axios from 'axios';
import events from './events';
import { Client, Context, CreateClientOptions } from './types';

/**
 * @category Client
 */
export function createClient(options: CreateClientOptions): Client {
  const { baseURL, region = 'sel', platformId, apiKey } = options;

  const url = baseURL ?? `https://evt-${region}.rmp-api.moloco.com`;

  const axios = Axios.create({
    baseURL: `${url}/rmp/event/v1`,
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey,
    },
  });

  const context: Context = {
    axios,
    platformId,
  };

  return events(context);
}

// export error types
/**
 * @category Error
 */
export * as errors from './utils/errors';

// export common data types
export * from './types/external';
