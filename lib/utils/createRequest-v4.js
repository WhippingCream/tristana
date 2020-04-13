const axios = require('axios');

require('dotenv').config()

module.exports = ({ method, path, params }) => {
    return () => axios({
        method,
        url: `https://${process.env.RIOT_API_REGION}.api.riotgames.com${path}`,
        params,
        headers: {
            'X-Riot-Token': process.env.RIOT_API_KEY,
        }
    });
}
