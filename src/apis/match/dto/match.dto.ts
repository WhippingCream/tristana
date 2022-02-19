import { MatchInfoDto } from "./match-info.dto";
import { MatchMetadataDto } from "./match-metadata.dto";

export interface MatchDto {
  // Match metadata.
  metadata: MatchMetadataDto;

  // Match info.
  info: MatchInfoDto;
}
