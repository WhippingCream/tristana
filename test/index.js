const { summoner } = require('../lib');

require('dotenv').config();

if (!process.env.RIOT_API_REGION) {
    throw new Error('RIOT_API_REGION env is empty.')
}

if (!process.env.RIOT_API_KEY) {
    throw new Error('RIOT_API_KEY env is empty.')
}

const reqs = [
    summoner.getByName('Hide on bush'),
    summoner.getByName('칼과창방패'),
];

reqs.forEach(async (req) => {
    const { status, data } = await req();

    switch (status) {
        default:
            console.log('Unknown Error');
            break;

        case 200:
            console.log(data);
            break;

        case 400:
            console.log('Bad request');
            break;

        case 401:
            console.log('Unauthorized');
            break;

        case 403:
            console.log('Forbidden');
            break;
                
        case 404:
            console.log('Data not found');
            break;
            
        case 405:
            console.log('Method not allowed');
            break;
            
        case 415:
            console.log('Unsupported media type');
            break;
            
        case 429:
            console.log('Rate limit exceeded');
            break;

        case 500:
            console.log('Internal server error');
            break;

        case 502:
            console.log('Bad gateway');
            break;
            
        case 503:
            console.log('Service unavailable');
            break;
            
        case 504:
            console.log('Gateway timeout');
            break;
    }
});
