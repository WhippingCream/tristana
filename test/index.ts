import { match, summoner } from "../src";

require("dotenv").config();

if (!process.env.RIOT_API_REGION) {
  throw new Error("RIOT_API_REGION env is empty.");
}

if (!process.env.RIOT_API_KEY) {
  throw new Error("RIOT_API_KEY env is empty.");
}

const reqs = [
  summoner.v4.getByName("Hide on bush"),
  match.v5.getIds(
    "q2OE3y7njNK6pcYTD1Gb7SmiGUQwI4PFfu_r19rnBxjYMENzcUe3Ik1HcXQRDzfAJIYtZzLrPOCUiQ"
  ),
];

const test = async () => {
  const {
    data: { puuid },
  } = await summoner.v4.getByName("Hide on bush");
  const { data: matchIds } = await match.v5.getIds(puuid);

  console.log(matchIds);
};

test();
