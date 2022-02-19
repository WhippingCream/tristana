export interface MatchPerkStyleSelectionDto {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

export interface MatchPerkStyleDto {
  description: string;
  selections: MatchPerkStyleSelectionDto[];
  style: number;
}

export interface MatchPerkStatsDto {
  defense: number;
  flex: number;
  offense: number;
}

export interface MatchPerksDto {
  statPerks: MatchPerkStatsDto;
  styles: MatchPerkStyleDto[];
}
