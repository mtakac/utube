import axios from 'axios';

import { store } from 'store';

const API_KEY = 'AIzaSyBNoOW-2G7Fkgs-vnycwR006A-BI8mZAiI';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const MAX_RESULTS = 10;

class YoutubeApi {
    constructor() {
        this.key = API_KEY;
        this.baseUrl = BASE_URL;

        this.search = this.search.bind(this);
        this.getVideoById = this.getVideoById.bind(this);
        this.getVideoRating = this.getVideoRating.bind(this);
        this.setVideoRating = this.setVideoRating.bind(this);
    }

    requestOptions() {
        const { accessToken } = store.getState();
        const headers = { };

        if (accessToken) {
            headers.Authorization = `Bearer ${accessToken}`;
        }

        return {
            data: { },
            params: {
                key: this.key
            },
            headers
        };
    }

    async makeRequest(path, method = 'get', options = { }) {
        const url = `${BASE_URL}${path}`;

        const args = { ...this.requestOptions(), ...options };

        try {
            return await axios({ method, url, ...args });
        } catch (error) {
            return error.response;
        }
    }

    search(q, pageToken) {
        const params = {
            q,
            key: this.key,
            maxResults: MAX_RESULTS,
            part: 'snippet',
            type: 'video'
        };

        if (pageToken) params.pageToken = pageToken;

        return this.makeRequest('/search', 'get', { params });
    }

    getVideoById(id) {
        const params = {
            id,
            key: this.key,
            part: 'snippet'
        };

        return this.makeRequest('/videos', 'get', { params });
    }

    getVideoRating(id) {
        const params = { id };

        return this.makeRequest('/videos/getRating', 'get', { params });
    }

    setVideoRating(id, rating) {
        const params = { id, rating };

        return this.makeRequest('/videos/rate', 'post', { params });
    }
}

export default new YoutubeApi();
