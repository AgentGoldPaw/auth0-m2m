# auth0-m2m

Provides a simple interface for retrieving access token from `client_credentials` authentication method from auth0. 

## Install 
```shell
npm i @redmunroe/auth0-m2m 
```

## Import
```js
import Auth0 from '@redmunroe/auth0-m2m
```

## Usage

```js
const client = new Auth0(client_id, domain, client_secret, audience)
const token = await client.getAccessToken();
```
