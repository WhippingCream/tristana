import { MatchBanDto } from "./match-ban.dto";
import { MatchObjectivesDto } from "./match-objectives.dto";

export interface MatchTeamDto {
  bans: MatchBanDto[];
  objectives: MatchObjectivesDto;
  teamId: number;
  win: boolean;
}
