import axios, { AxiosResponse } from "axios";

import { HttpMethod } from "../enums/httpMethod";
import dotenv from "dotenv";

dotenv.config();

interface RequestParam {
  path: string;
  params?: unknown;
}

export const matchV5 = <T>({
  path,
  params,
}: RequestParam): Promise<AxiosResponse<T>> => {
  return axios.get<T>(
    `https://${process.env.RIOT_API_REGION_CONTINENT}.api.riotgames.com/lol/match/v5${path}`,
    {
      params,
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY,
      },
    }
  );
};

export const v4 = <T>({
  path,
  params,
}: RequestParam): Promise<AxiosResponse<T>> => {
  return axios.get<T>(
    `https://${process.env.RIOT_API_REGION}.api.riotgames.com${path}`,
    {
      params,
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY,
      },
    }
  );
};
