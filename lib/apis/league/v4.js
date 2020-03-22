/**
 * @see https://developer.riotgames.com/apis#league-v4
 */

const createRequest = require('../../utils/createRequest')

const scope = '/lol/league/v4';

/**
 * @description Get the challenger league for given queue.
 * @param {string} queue
 */
exports.getChallengers = (queue) => createRequest({
    method: 'GET',
    path: `${scope}/challengerleagues/by-queue/${queue}`
});

/**
 * @description Get league entries in all queues for a given summoner ID.
 * @param {string} encryptedSummonerId
 */
exports.getEntriesBySummonerId = (encryptedSummonerId) => createRequest({
    method: 'GET',
    path: `${scope}/entries/by-summoner/${encryptedSummonerId}`
});

/**
 * @description Get all the league entries.
 * @param {string} queue Note that the queue value must be a valid ranked queue.
 * @param {string} tier
 * @param {string} division
 * @param {int} [page] Starts with page 1.
 */
exports.getEntriesByDivision = (queue, tier, division) => createRequest({
    method: 'GET',
    path: `${scope}/entries/${queue}/${tier}/${division}`
});

/**
 * @description Get the grandmaster league of a specific queue.
 * @param {string} queue
 */
exports.getGrandmasters = (queue) => createRequest({
    method: 'GET',
    path: `${scope}/grandmasterleagues/by-queue/${queue}`
});

/**
 * @description Get league with given ID, including inactive entries.
 * @param {string} leagueId The UUID of the league.
 */
exports.getByLeagueId = (leagueId) => createRequest({
    method: 'GET',
    path: `${scope}/leagues/${leagueId}`
});

/**
 * @description Get the master league for given queue.
 * @param {string} queue
 */
exports.getMasters = (queue) => createRequest({
    method: 'GET',
    path: `${scope}/masterleagues/by-queue/${queue}`
});
