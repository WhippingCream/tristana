/**
 * @see https://developer.riotgames.com/apis#match-v5
 */

import axios, { AxiosResponse } from "axios";

import { MatchDto } from "./dto/match.dto";
import { MatchTimeLineDto } from "./dto/match-timeline.dto";
import { matchV5 } from "../../utils/createRequest";

const url = `https://${process.env.RIOT_API_REGION}.api.riotgames.com`;
const scope = "/lol/match/v5";

/**
 * @description Get a match by match id
 * @param {string} puuid The match ID.
 * @param {Date=} startTime The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.
 * @param {Date=} endTime
 * @param {number=} queue Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.
 * @param {string=} type Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.
 * @param {number=} start Defaults to 0. Start index.
 * @param {number=} count Defaults to 20. Valid values: 0 to 100. Number of match ids to return.
 */
export const getIds = (
  puuid: string,
  startTime?: Date,
  endTime?: Date,
  queue?: number,
  type?: string,
  start?: number,
  count?: number
): Promise<AxiosResponse<string[]>> => {
  let params: {
    startTime?: number;
    endTime?: number;
    queue?: number;
    type?: string;
    start?: number;
    count?: number;
  } = {
    queue,
    type,
    start,
    count,
  };

  if (startTime && endTime) {
    params.startTime = startTime.valueOf() / 1000;
    params.endTime = endTime.valueOf() / 1000;
  }

  return matchV5<string[]>({ path: `/matches/by-puuid/${puuid}/ids`, params });
};

/**
 * @description Get a match by match id
 * @param {string} matchId The match ID.
 */
export const get = (matchId: string): Promise<AxiosResponse<MatchDto>> =>
  matchV5<MatchDto>({ path: `/matches/${matchId}` });

/**
 * @description Get a match timeline by match id
 * @param {string} matchId The match ID.
 */
export const getTimeline = (
  matchId: string
): Promise<AxiosResponse<MatchTimeLineDto>> =>
  matchV5<MatchTimeLineDto>({ path: `/matches/${matchId}/timeline` });
