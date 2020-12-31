import { v1 } from "../../utils/createRequest";
import configs from "../../configs";

const scope = "/stats";

const region = configs.region?.toUpperCase();

export const getMatchHistory = (
  tokenId: string,
  accountId: string,
  beginIndex: number
) =>
  v1({
    tokenId: tokenId,
    path: `${scope}/player_history/${region}/${accountId}`,
    params: { begIndex: beginIndex, endIndex: beginIndex + 20 },
  });

export const getCustomMatchHistory = (
  tokenId: string,
  accountId: string,
  beginIndex: number
) =>
  v1({
    tokenId: tokenId,
    path: `${scope}/player_history/${region}/${accountId}`,
    params: { begIndex: beginIndex, endIndex: beginIndex + 20, queue: 0 },
  });

export const getMatchData = (tokenId: string, gameId: string) =>
  v1({
    tokenId: tokenId,
    path: `${scope}/game/${region}/${gameId}`,
  });
