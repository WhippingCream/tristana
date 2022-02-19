export interface MatchObjectiveDto {
  first: boolean;
  kills: number;
}

export interface MatchObjectivesDto {
  baron: MatchObjectiveDto;
  champion: MatchObjectiveDto;
  dragon: MatchObjectiveDto;
  inhibitor: MatchObjectiveDto;
  riftHerald: MatchObjectiveDto;
  tower: MatchObjectiveDto;
}
