import Axios from 'axios';
import events from './events';
import { Context } from './types';

export type CreateClientOptions = {
  baseURL?: string;
  region?: string;
  platformId: string;
  apiKey: string;
};

export function createClient(options: CreateClientOptions) {
  const { baseURL, platformId, apiKey } = options;

  const url = baseURL ?? `https://evt-sel.rmp-api.moloco.com`;

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

  return {
    events: events(context),
  };
}

// export error types
export * as errors from './utils/errors';

// export common data types
export * from './types/external';
