/**
 * @see https://developer.riotgames.com/apis#summoner-v4
 */

const createRequest = require('../../utils/createRequest')

const scope = '/lol/summoner/v4';

/**
 * @description Get a summoner by account ID.
 * @param {string} encryptedAccountId
 */
exports.getByAccount = (encryptedAccountId) => createRequest({
    method: 'GET',
    path: `${scope}/summoners/by-account/${encryptedAccountId}`
});

/**
 * @description Get a summoner by summoner name.
 * @param {string} summonerName Summoner Name
 */
exports.getByName = (summonerName) => createRequest({
    method: 'GET',
    path: `${scope}/summoners/by-name/${encodeURI(summonerName)}`
});

/**
 * @description Get a summoner by PUUID.
 * @param {string} encryptedPUUID Summoner ID
 */
exports.getByUUID = (encryptedPUUID) => createRequest({
    method: 'GET',
    path: `${scope}/summoners/by-name/${encryptedPUUID}`
});

/**
 * @description Get a summoner by summoner ID.
 * @param {string} encryptedSummonerId Summoner ID
 */
exports.get = (encryptedSummonerId) => createRequest({
    method: 'GET',
    path: `${scope}/summoners/${encryptedSummonerId}`
});
