import { rest } from 'msw';
import { KNOWN_PLATFORM_ID, REGISTERED_API_KEY } from './data';

type Config = {
  baseURL: string;
};

const insertEvent = (config: Config) => {
  return rest.post(
    `${config.baseURL}/platforms/:platformId/events`,
    (req, res, ctx) => {
      const header = req.headers.get('x-api-key');
      if (!header) {
        return res(ctx.status(401));
      }

      if (header !== REGISTERED_API_KEY) {
        return res(ctx.status(403));
      }

      const { platformId } = req.params;
      if (platformId !== KNOWN_PLATFORM_ID) {
        return res(ctx.status(404));
      }

      return res(ctx.status(200));
    }
  );
};

export const getHandlers = (options: { baseURL: string }) => {
  const { baseURL } = options;

  const config = {
    baseURL: `${baseURL}/retail/v1`,
  };

  return [insertEvent(config)];
};
