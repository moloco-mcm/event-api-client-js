# MOLOCO RMP Event API Client for JavaScript

JavaScript/TypeScript library for MOLOCO RMP Event API

## Installation

```shell
npm install @moloco-rmp/event-api-client --save
```

```shell
yarn add @moloco-rmp/event-api-client
```

## Examples

### Setting API Credentials and Platform ID

Please contact your MOLOCO account manager to get your RMP Event API Key and Platform ID

```javascript
export const client = v1.createClient({
  apiKey: process.env.RMP_EVENT_API_KEY,
  platformId: process.env.RMP_PLATFORM_ID,
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

[RMP Event API Reference](https://moloco-rmp.readme.io/reference)

© Moloco, Inc. 2022 All rights reserved. Released under Apache 2.0 License
