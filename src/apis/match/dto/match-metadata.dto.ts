export interface MatchMetadataDto {
  // Match data version.
  data_version: string;

  // Match id.
  match_id: string;

  // A list of participant PUUIDs.
  participants: string[];
}
