import { InsertEventParams } from '../events/types';

/**
 * @category Event
 */
export type RetailEventType =
  | 'SEARCH'
  | 'ITEM_PAGE_VIEW'
  | 'ADD_TO_CART'
  | 'PURCHASE'
  | 'ADD_TO_WISHLIST'
  | 'HOME'
  | 'LAND'
  | 'PAGE_VIEW';

/**
 * @category Event
 */
export type ChannelType = 'APP' | 'SITE' | 'DESKTOP_SITE' | 'MOBILE_SITE';

/**
 * @category Client
 */
export type CreateClientOptions = {
  baseURL?: string;
  region?: string;
  platformId: string;
  apiKey: string;
};

/**
 * @category Client
 */
export interface Client {
  /**
   * Insert an event. Throws one of the errors defined in {@link v1.errors}.
   */
  insertEvent: (params: InsertEventParams) => Promise<void>;
}

/**
 * @category Event
 */
export { InsertEventParams } from '../events/types';
