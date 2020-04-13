const axios = require('axios');

require('dotenv').config()

module.exports = ({ method, path, tokenId, params }) => {
    return () => axios({
        method,
        url: `https://acs.leagueoflegends.com/v1${path}`,
        params,
        headers: {
            'cookie':`id_token=${tokenId}`,
        }
    });
}