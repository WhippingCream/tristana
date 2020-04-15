const createRequest = require('../../utils/createRequest-v1')

const scope = '/stats';

exports.getMatchHistory = (tokenId, accountId, beginIndex) => createRequest({
    method: 'GET',
    tokenId: tokenId,
    path: `${scope}/player_history/${process.env.RIOT_API_REGION.toUpperCase()}/${accountId}`,
    params: { begIndex: beginIndex, endIndex: beginIndex + 20 }
});

exports.getMatchData = (tokenId, gameId) => createRequest({
    method: 'GET',
    tokenId: tokenId,
    path: `${scope}/game/${process.env.RIOT_API_REGION.toUpperCase()}/${gameId}`,
});