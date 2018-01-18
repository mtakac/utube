import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/oauth2/v3';
const CLIENT_ID = '338078566399-4p7joqoeim2mvde595eo1o27hj1i3ofg.apps.googleusercontent.com';

class GoogleAuthApi {
    constructor() {
        this.baseUrl = BASE_URL;
        this.clientId = CLIENT_ID;

        this.verifyToken = this.verifyToken.bind(this);
        this.syncVerifyClientId = this.syncVerifyClientId.bind(this);
    }

    requestOptions() {
        return {
            data: { },
            headers: { },
            params: { }
        };
    }

    async makeRequest(path, method = 'get', options = this.requestOptions) {
        const url = `${BASE_URL}${path}`;

        try {
            return await axios({ method, url, ...options });
        } catch (error) {
            return error.response;
        }
    }

    verifyToken(accessToken) {
        const params = {
            access_token: accessToken
        };

        return this.makeRequest('/tokeninfo', 'post', { params });
    }

    syncVerifyClientId(aud) {
        if (this.clientId !== aud) return false;

        return true;
    }
}

export default new GoogleAuthApi();
