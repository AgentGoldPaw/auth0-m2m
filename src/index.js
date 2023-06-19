import fetch from 'node-fetch';

export default class Auth0 {
    client_id; 
    domain;
    client_secret;
    audience; 
    constructor(client_id, domain, client_secret, audience) {
        this.client_id = client_id;
        this.domain = domain;
        this.client_secret = client_secret;
        this.audience = audience;
    }

    async getAccessToken() {
        const response = await fetch(`https://${this.domain}/oauth/token`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                client_id: this.client_id,
                client_secret: this.client_secret,
                audience: this.audience,
                grant_type: 'client_credentials'
            })
        }); 
        console.log((await response.blob()).toString());
        const responseJson = await response.json();
        return responseJson.access_token;
    }
}