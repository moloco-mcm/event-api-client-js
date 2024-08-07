import { InsertEventParams } from '../events/types';

export const MOCK_BASE_URL = 'http://mock-server-url';

export const INSERT_EVENT_PARAMS: InsertEventParams = {
  eventType: 'ADD_TO_CART',
  timestamp: 1632418357,
  channelType: 'APP',
  userId: 'test_user_id',
  device: {
    os: 'ios',
    osVersion: '14.1',
    advertisingId: '7acefbed-d1f6-4e4e-aa26-74e93dd017e4',
    uniqueDeviceId: 'test_device_id',
    persistentId: 'test_persistent_id',
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
