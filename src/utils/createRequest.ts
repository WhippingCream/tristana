import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

interface RequestParamV4 {
  method?: HttpMethod;
  path: string;
  params?: unknown;
}

interface RequestParamV1 {
  method?: HttpMethod;
  path: string;
  tokenId: string;
  params?: unknown;
}

export const v4 = ({ method, path, params }: RequestParamV4) => {
  return () =>
    axios({
      method: method ?? HttpMethod.GET,
      url: `https://${process.env.RIOT_API_REGION}.api.riotgames.com${path}`,
      params,
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY,
      },
    });
};

export const v1 = ({ method, path, tokenId, params }: RequestParamV1) => {
  return () =>
    axios({
      method: method ?? HttpMethod.GET,
      url: `https://acs.leagueoflegends.com/v1${path}`,
      params,
      headers: {
        cookie: `id_token=${tokenId}`,
      },
    });
};
