# MOLOCO MCM Event API Client for JavaScript

JavaScript/TypeScript library for MOLOCO MCM Event API

## Installation

```shell
npm install @moloco-rmp/event-api-client --save
```

```shell
yarn add @moloco-rmp/event-api-client
```

## Examples

### Setting API Credentials and Platform ID

Please contact your MOLOCO account manager to get your MCM Event API Key and Platform ID

```javascript
export const client = v1.createClient({
  apiKey: process.env.MCM_EVENT_API_KEY,
  platformId: process.env.MCM_PLATFORM_ID,
});
```

### Send ADD_TO_CART event

```javascript
// This example is for reporting your events server-to-server (S2S).
import { client } from '../common/event-api-client';
import usParser from 'ua-parser-js';

const { session, headers } = req;
const ua = usParser(headers['user-agent']);

client.insertEvent({
  id: randomString(),
  eventType: 'ADD_TO_CART',
  timestamp: Date.now(),
  channelType: 'SITE',
  userId: session.user.id,
  device: {
    os: ua.os.name,
    osVersion: ua.os.version,
    model: ua.device.model,
    ip: req.socket.remoteAddress,
  },
  items: [
    {
      id: product.id,
      price: product.salePrice
      quantity: product.quantity,
    },
  ],
  pageId: `CATEGORY_HOME_PAGE:${categoryId}`,
  referrerPageId: `PRODUCT_DETAIL_PAGE:${productId}`,
});
```

### Send PURCHASE event

```javascript
client.insertEvent({
  id: randomString(),
  eventType: 'PURCHASE',
  timestamp: Date.now(),
  channelType: 'SITE',
  userId: session.user.id,
  device: {
    os: ua.os.name,
    osVersion: ua.os.version,
    model: ua.device.model,
    ip: req.socket.remoteAddress,
  },
  items: products.map((product) => ({
    id: product.id,
    price: product.salePrice,
    quantity: product.quantity,
  })),
  revenue: {
    currency: 'USD',
    amount: totalAmount,
  },
  pageId: 'ORDER_SUMMARY_PAGE'
  referrerPageId: 'CART_PAGE',
});
```

### Send ITEM_PAGE_VIEW event

```javascript
client.insertEvent({
  id: randomString(),
  eventType: 'ITEM_PAGE_VIEW',
  timestamp: Date.now(),
  channelType: 'SITE',
  userId: session.user.id,
  device: {
    os: ua.os.name,
    osVersion: ua.os.version,
    model: ua.device.model,
    ip: req.socket.remoteAddress,
  },
  items: [
    {
      id: product.id,
      price: product.salePrice
      quantity: 1,
    },
  ],
  pageId: `PRODUCT_DETAIL_PAGE:${productId}`,
  referrerPageId: `CATEGORY_HOME_PAGE:${categoryId}`,
});
```

### Handling errors

```javascript
import { client } from '../common/event-api-client';
import { v1 } from '@moloco-rmp/event-api-client';

client.insertEvent({ ... })
  .catch((error) => {
    console.error(error.message);
    if (error instanceof v1.errors.InternalServerError) {
      ...
    } else if (error instanceof v1.errors.BadRequestError) {
      ...
    } else if (error instanceof v1.errors.ForbiddenError) {
      ...
    } else if (error instanceof v1.errors.NetworkError) {
      ...
    } else if (error instanceof v1.errors.NotFoundError) {
      ...
    } else if (error instanceof v1.errors.UnauthorizedError) {
      ...
    } else if (error instanceof v1.errors.UnknownError) {
    }
  });
```

## Documentation

- [Full Library Reference](https://moloco-mcm.github.io/event-api-client-js)
- [MCM Event API Reference](https://mcm-docs.moloco.com/reference/rmpeventapi_postuserevent)

© Moloco, Inc. 2024 All rights reserved. Released under Apache 2.0 License
