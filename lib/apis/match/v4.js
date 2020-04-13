/**
 * @see https://developer.riotgames.com/apis#match-v4
 */

const createRequest = require('../../utils/createRequest-v4')

const scope = '/lol/match/v4';

/**
 * @description Get match IDs by tournament code.
 * @param {string} tournamentCode The tournament code.
 */
exports.getByTournamentCode = (tournamentCode) => ({
    method: 'GET',
    path: `${scope}/matches/by-tournament-code/${tournamentCode}/ids`
});

/**
 * @description Get match by match ID.
 * @param {long} matchId The match ID.
 */
exports.get = (matchId) => createRequest({
    method: 'GET',
    path: `${scope}/matches/${matchId}`
});

/**
 * @description Get match by match ID and tournament code.
 * @param {long} matchId The match ID.
 * @param {string} tournamentCode The tournament code.
 */
exports.getByUUID = (matchId, tournamentCode) => createRequest({
    method: 'GET',
    path: `${scope}/matches/${matchId}/by-tournament-code/${tournamentCode}`
});

/**
 * @description Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.
 * @param {string} encryptedAccountId The account ID.
 * @param {int} [champion] Set of champion IDs for filtering the matchlist.
 * @param {int} [queue] Set of queue IDs for filtering the matchlist.	
 * @param {int} [season] Set of season IDs for filtering the matchlist.
 * @param {long} [endTime] The end time to use for filtering matchlist specified as epoch milliseconds.
 *                         If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case).
 *                         If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation.
 *                         If both are specified, then endTime should be greater than beginTime.
 *                         The maximum time range allowed is one week, otherwise a 400 error code is returned.
 * @param {long} [beginTime] The begin time to use for filtering matchlist specified as epoch milliseconds.
 *                           If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case).
 *                           If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation.
 *                           If both are specified, then endTime should be greater than beginTime.
 *                           The maximum time range allowed is one week, otherwise a 400 error code is returned.
 * @param {int} [endIndex] The end index to use for filtering matchlist.
 *                         If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100.
 *                         If endIndex is specified, but not beginIndex, then beginIndex defaults to 0.
 *                         If both are specified, then endIndex must be greater than beginIndex.
 *                         The maximum range allowed is 100, otherwise a 400 error code is returned.
 * @param {int} [beginIndex] The begin index to use for filtering matchlist.
 *                           If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100.
 *                           If endIndex is specified, but not beginIndex, then beginIndex defaults to 0.
 *                           If both are specified, then endIndex must be greater than beginIndex.
 *                           The maximum range allowed is 100, otherwise a 400 error code is returned.
 */
exports.getByAccountId = (encryptedAccountId) => createRequest({
    method: 'GET',
    path: `${scope}/matchlists/by-account/${encryptedAccountId}`
});

/**
 * @description Get match timeline by match ID.
 * @param {long} matchId The match ID.
 */
exports.getTimeline = (matchId) => createRequest({
    method: 'GET',
    path: `${scope}/timelines/by-match/${matchId}`
});