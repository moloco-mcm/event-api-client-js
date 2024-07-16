import { InsertEventParams } from '../types';
import { translateInsertEventParamsToInsertEventRequestBody } from '../utils';

describe('auction/utils', () => {
  test('translateInsertEventParamsToInsertEventRequestBody', () => {
    const params: InsertEventParams = {
      id: 'test_id',
      eventType: 'ADD_TO_CART',
      timestamp: 1632418357,
      channelType: 'APP',
      userId: 'test_user_id',
      sessionId: 'test_session_id',
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
      searchQuery: 'test-query',
      pageId: 'PAGE_ID',
      referrerPageId: 'REFERRER_PAGE_ID',
      shippingCharge: {
        currency: 'USD',
        amount: 0.99,
      },
      decisionTrackId: 'TRACK_ID',
    };

    expect(
      translateInsertEventParamsToInsertEventRequestBody(params)
    ).toMatchObject({
      id: 'test_id',
      event_type: 'ADD_TO_CART',
      timestamp: 1632418357,
      channel_type: 'APP',
      user_id: 'test_user_id',
      session_id: 'test_session_id',
      device: {
        os: 'ios',
        os_version: '14.1',
        advertising_id: '7acefbed-d1f6-4e4e-aa26-74e93dd017e4',
        unique_device_id: 'test_device_id',
        persistent_id: 'test_persistent_id',
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
      search_query: 'test-query',
      page_id: 'PAGE_ID',
      referrer_page_id: 'REFERRER_PAGE_ID',
      shipping_charge: {
        currency: 'USD',
        amount: 0.99,
      },
      decision_track_id: 'TRACK_ID',
    });
  });
});
