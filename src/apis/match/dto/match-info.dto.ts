import { MatchParticipantDto } from "./match-participant.dto";
import { MatchTeamDto } from "./match-team.dto";

export interface MatchInfoDto {
  // Unix timestamp for when the game is created (i.e., the loading screen).
  gameCreation: bigint;

  // Game length in milliseconds.
  gameDuration: bigint;

  // Refer to the Game Constants documentation.
  gameId: bigint;

  gameMode: string;

  gameName: string;

  // Unix timestamp for when match actually starts.
  gameStartTimestamp: bigint;

  gameType: string;

  // The first two parts can be used to determine the patch a game was played on.
  gameVersion: string;

  // Refer to the Game Constants documentation.
  mapId: number;
  participants: MatchParticipantDto[];

  // Platform where the match was played.
  platformId: string;

  // Refer to the Game Constants documentation.
  queueId: number;

  teams: MatchTeamDto[];

  // Tournament code used to generate the match.
  tournamentCode: string;
}
