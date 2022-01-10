import { setupServer } from '../../../mocks/v1/server';
import { KNOWN_PLATFORM_ID, REGISTERED_API_KEY } from '../../../mocks/v1/data';
import { createClient } from '..';
import { MOCK_BASE_URL } from './consts';
import { InsertEventParams } from '../events/types';

const server = setupServer(MOCK_BASE_URL);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('events', () => {
  const client = createClient({
    baseURL: `${MOCK_BASE_URL}`,
    apiKey: REGISTERED_API_KEY,
    platformId: KNOWN_PLATFORM_ID,
  });

  describe('events.insertEvent', () => {
    test('should throw no errors', async () => {
      const params: InsertEventParams = {
        eventType: 'ADD_TO_CART',
        timestamp: 1632418357,
        channelType: 'APP',
        userId: 'test_user_id',
        device: {
          os: 'ios',
          osVersion: '14.1',
          advertisingId: '7acefbed-d1f6-4e4e-aa26-74e93dd017e4',
          uniqueDeviceId: 'test_device_id',
          model: 'iPhone 7',
          ip: '127.0.0.1',
          ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
          language: 'ko',
        },
        items: [
          {
            id: 'test-item-id-1',
            price: {
              currency: 'USD',
              amount: 100,
            },
            quantity: 1,
          },
          {
            id: 'test-item-id-2',
            price: {
              currency: 'USD',
              amount: 200,
            },
            quantity: 10,
          },
        ],
        revenue: {
          currency: 'USD',
          amount: 300,
        },
      };

      expect(() => client.insertEvent(params)).not.toThrow();
    });
  });
});
