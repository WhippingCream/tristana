import { MatchPerksDto } from "./match-perks.dto";

export interface MatchParticipantDto {
  assists: number;

  baronKills: number;

  bountyLevel: number;

  champExperience: number;

  champLevel: number;

  championId: number;

  championName: string;

  // This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)
  championTransform: number;

  consumablesPurchased: number;

  damageDealtToBuildings: number;

  damageDealtToObjectives: number;

  damageDealtToTurrets: number;

  damageSelfMitigated: number;

  deaths: number;

  detectorWardsPlaced: number;

  doubleKills: number;

  dragonKills: number;

  firstBloodAssist: boolean;

  firstBloodKill: boolean;

  firstTowerAssist: boolean;

  firstTowerKill: boolean;

  gameEndedInEarlySurrender: boolean;

  gameEndedInSurrender: boolean;

  goldEarned: number;

  goldSpent: number;

  // Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
  individualPosition: string;

  inhibitorKills: number;

  inhibitorTakedowns: number;

  inhibitorsLost: number;

  item0: number;

  item1: number;

  item2: number;

  item3: number;

  item4: number;

  item5: number;

  item6: number;

  itemsPurchased: number;

  killingSprees: number;

  kills: number;

  lane: string;

  largestCriticalStrike: number;

  largestKillingSpree: number;

  largestMultiKill: number;

  longestTimeSpentLiving: number;

  magicDamageDealt: number;

  magicDamageDealtToChampions: number;

  magicDamageTaken: number;

  neutralMinionsKilled: number;

  nexusKills: number;

  nexusTakedowns: number;

  nexusLost: number;

  objectivesStolen: number;

  objectivesStolenAssists: number;

  participantId: number;

  pentaKills: number;

  perks: MatchPerksDto;

  physicalDamageDealt: number;

  physicalDamageDealtToChampions: number;

  physicalDamageTaken: number;

  profileIcon: number;

  puuid: string;

  quadraKills: number;

  riotIdName: string;

  riotIdTagline: string;

  role: string;

  sightWardsBoughtInGame: number;

  spell1Casts: number;

  spell2Casts: number;

  spell3Casts: number;

  spell4Casts: number;

  summoner1Casts: number;

  summoner1Id: number;

  summoner2Casts: number;

  summoner2Id: number;

  summonerId: string;

  summonerLevel: number;

  summonerName: string;

  teamEarlySurrendered: boolean;

  teamId: number;

  // Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
  teamPosition: string;

  timeCCingOthers: number;

  timePlayed: number;

  totalDamageDealt: number;

  totalDamageDealtToChampions: number;

  totalDamageShieldedOnTeammates: number;

  totalDamageTaken: number;

  totalHeal: number;

  totalHealsOnTeammates: number;

  totalMinionsKilled: number;

  totalTimeCCDealt: number;

  totalTimeSpentDead: number;

  totalUnitsHealed: number;

  tripleKills: number;

  trueDamageDealt: number;

  trueDamageDealtToChampions: number;

  trueDamageTaken: number;

  turretKills: number;

  turretTakedowns: number;

  turretsLost: number;

  unrealKills: number;

  visionScore: number;

  visionWardsBoughtInGame: number;

  wardsKilled: number;

  wardsPlaced: number;

  win: boolean;
}
