/**
 * @see https://developer.riotgames.com/apis#summoner-v4
 */

import { AxiosResponse } from "axios";
import { SummonerDto } from "./dto/summoner.dto";
import { v4 } from "../../utils/createRequest";

const scope = "/lol/summoner/v4";

/**
 * @description Get a summoner by account ID.
 * @param {string} encryptedAccountId
 */
export const getByAccount = (encryptedAccountId: string) =>
  v4({
    path: `${scope}/summoners/by-account/${encryptedAccountId}`,
  });

/**
 * @description Get a summoner by summoner name.
 * @param {string} summonerName Summoner Name
 */
export const getByName = (
  summonerName: string
): Promise<AxiosResponse<SummonerDto>> =>
  v4<SummonerDto>({
    path: `${scope}/summoners/by-name/${encodeURI(summonerName)}`,
  });

/**
 * @description Get a summoner by PUUID.
 * @param {string} encryptedPUUID Summoner ID
 */
export const getByUUID = (encryptedPUUID: string) =>
  v4({
    path: `${scope}/summoners/by-name/${encryptedPUUID}`,
  });

/**
 * @description Get a summoner by summoner ID.
 * @param {string} encryptedSummonerId Summoner ID
 */
export const get = (encryptedSummonerId: string) =>
  v4({
    path: `${scope}/summoners/${encryptedSummonerId}`,
  });
