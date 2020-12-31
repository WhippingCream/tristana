import { v1 } from "../../utils/createRequest";
import configs from "../../configs";

const scope = "/players";
const region = configs.region?.toUpperCase();

export const getByName = (tokenId: string, summonerName: string) =>
  v1({
    tokenId: tokenId,
    path: `${scope}`,
    params: {
      name: summonerName,
      region,
    },
  });
