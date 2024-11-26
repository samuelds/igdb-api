import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config(
    {
        path: ['.env', '.env.local'],
        override: true
    }
);

console.log(process.env.TWITCH_CLIENT_ID, process.env.TWITCH_CLIENT_SECRET, process.env.TWITCH_API_TOKEN_URL);

class IGDBClient {

    private static instance: IGDBClient;

    private constructor() { }

    // Get the access token from IGDB
    public getAccessToken = () => {
        return axios({
            url: process.env.TWITCH_API_TOKEN_URL,
            method: 'post',
            params: {
                client_id: process.env.TWITCH_CLIENT_ID,
                client_secret: process.env.TWITCH_CLIENT_SECRET,
                grant_type: 'client_credentials'
            }
        });
    }
    
    public static getInstance(): IGDBClient {
        if (!IGDBClient.instance) {
            IGDBClient.instance = new IGDBClient();
        }
        return IGDBClient.instance;
    }

}

export default IGDBClient;