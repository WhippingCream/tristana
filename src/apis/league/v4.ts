/**
 * @see https://developer.riotgames.com/apis#league-v4
 */

import { v4 } from "../../utils/createRequest";

const scope = "/lol/league/v4";

/**
 * @description Get the challenger league for given queue.
 * @param {string} queue
 */
export const getChallengers = (queue: string) =>
  v4({
    path: `${scope}/challengerleagues/by-queue/${queue}`,
  });

/**
 * @description Get league entries in all queues for a given summoner ID.
 * @param {string} encryptedSummonerId
 */
export const getEntriesBySummonerId = (encryptedSummonerId: string) =>
  v4({
    path: `${scope}/entries/by-summoner/${encryptedSummonerId}`,
  });

/**
 * @description Get all the league entries.
 * @param {string} queue Note that the queue value must be a valid ranked queue.
 * @param {string} tier
 * @param {string} division
 * @param {int} [page] Starts with page 1.
 */
export const getEntriesByDivision = (
  queue: string,
  tier: Tier,
  division: string
) =>
  v4({
    path: `${scope}/entries/${queue}/${tier}/${division}`,
  });

/**
 * @description Get the grandmaster league of a specific queue.
 * @param {string} queue
 */
export const getGrandmasters = (queue: string) =>
  v4({
    path: `${scope}/grandmasterleagues/by-queue/${queue}`,
  });

/**
 * @description Get league with given ID, including inactive entries.
 * @param {string} leagueId The UUID of the league.
 */
export const getByLeagueId = (leagueId: string) =>
  v4({
    path: `${scope}/leagues/${leagueId}`,
  });

/**
 * @description Get the master league for given queue.
 * @param {string} queue
 */
export const getMasters = (queue: string) =>
  v4({
    path: `${scope}/masterleagues/by-queue/${queue}`,
  });
