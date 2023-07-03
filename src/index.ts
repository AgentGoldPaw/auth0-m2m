import fetch from 'node-fetch';

type tokens = {
    access_token: string;
}

export default class Auth0 {
    private client_id: string; 
    private domain: string;
    private client_secret: string;
    private audience: string; 
    constructor(client_id: string, domain: string, client_secret: string, audience: string) {
        this.client_id = client_id;
        this.domain = domain;
        this.client_secret = client_secret;
        this.audience = audience;
    }

    async getAccessToken(): Promise<string> {
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

        if (response.status !== 200) {
            throw new Error('Unable to fetch access token');
        }

        const responseJson: tokens = await response.json() as tokens;
        return responseJson.access_token;
    }
}