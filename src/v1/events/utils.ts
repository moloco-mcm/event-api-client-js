import { InsertEventParams, InsertEventHttpRequestBody } from './types';

export const translateInsertEventParamsToInsertEventRequestBody = (
  params: InsertEventParams
): InsertEventHttpRequestBody => ({
  id: params.id,
  event_type: params.eventType,
  timestamp: params.timestamp,
  channel_type: params.channelType,
  user_id: params.userId,
  session_id: params.sessionId,
  device: params.device && {
    os: params.device.os,
    os_version: params.device.osVersion,
    advertising_id: params.device.advertisingId,
    unique_device_id: params.device.uniqueDeviceId,
    model: params.device.model,
    ip: params.device.ip,
    ua: params.device.ua,
    language: params.device.language,
  },
  items: params.items?.map((item) => ({
    id: item.id,
    price: {
      currency: item.price.currency,
      amount: item.price.amount,
    },
    quantity: item.quantity,
  })),
  revenue: params.revenue && {
    currency: params.revenue.currency,
    amount: params.revenue.amount,
  },
  search_query: params.searchQuery,
  referrer_page_id: params.referrerPageId,
});
