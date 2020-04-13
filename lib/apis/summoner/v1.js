const createRequest = require('../../utils/createRequest-v1')

const scope = '/players';

exports.getByName = (tokenId, summonerName) => createRequest({
    method: 'GET',
    tokenId: tokenId,
    path: `${scope}`,
    params: {
        name: summonerName,
        region: process.env.RIOT_API_REGION.toUpperCase()
    }
});