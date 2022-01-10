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
  | 'LAND';

/**
 * @category Event
 */
export type ChannelType = 'APP' | 'SITE';

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
