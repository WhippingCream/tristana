import { MatchInfoDto } from "./match-info.dto";
import { MatchMetadataDto } from "./match-metadata.dto";

export interface MatchTimeLineDto {
  metadata: MatchMetadataDto;
  info: MatchTimeLineInfoDto;
}

export interface ParticipantFrame {
  championStats: {
    abilityHaste: number;
    abilityPower: number;
    armor: number;
    armorPen: number;
    armorPenPercent: number;
    attackDamage: number;
    attackSpeed: number;
    bonusArmorPenPercent: number;
    bonusMagicPenPercent: number;
    ccReduction: number;
    cooldownReduction: number;
    health: number;
    healthMax: number;
    healthRegen: number;
    lifesteal: number;
    magicPen: number;
    magicPenPercent: number;
    magicResist: number;
    movementSpeed: number;
    omnivamp: number;
    physicalVamp: number;
    power: number;
    powerMax: number;
    powerRegen: number;
    spellVamp: number;
  };
  currentGold: number;
  damageStats: {
    magicDamageDone: number;
    magicDamageDoneToChampions: number;
    magicDamageTaken: number;
    physicalDamageDone: number;
    physicalDamageDoneToChampions: number;
    physicalDamageTaken: number;
    totalDamageDone: number;
    totalDamageDoneToChampions: number;
    totalDamageTaken: number;
    trueDamageDone: number;
    trueDamageDoneToChampions: number;
    trueDamageTaken: number;
  };
  goldPerSecond: number;
  jungleMinionsKilled: number;
  level: number;
  minionsKilled: number;
  participantId: number;
  position: {
    x: number;
    y: number;
  };
  timeEnemySpentControlled: number;
  totalGold: number;
  xp: number;
}

export interface MatchTimeLineInfoDto {
  frameInterval: number;
  frames: {
    events: {
      realTimestamp?: number;
      timestamp: number;
      type: string;
      itemId?: number;
      participantId?: number;
      levelUpType: string;
      skillSlot?: number;
      creatorId?: number;
      wardType: string;
      level?: number;
      assistingParticipantIds: number[];
      bounty?: number;
      killStreakLength?: number;
      killerId?: number;
      position: {
        x: number;
        y: number;
      };
      victimDamageDealt: {
        basic: boolean;
        magicDamage: number;
        name: string;
        participantId: number;
        physicalDamage: number;
        spellName: string;
        spellSlot: number;
        trueDamage: number;
        type: string;
      }[];
      victimDamageReceived: {
        basic: boolean;
        magicDamage: number;
        name: string;
        participantId: number;
        physicalDamage: number;
        spellName: string;
        spellSlot: number;
        trueDamage: number;
        type: string;
      }[];
      victimId?: number;
      killType: string;
      laneType: string;
      teamId?: number;
      afterId?: number;
      beforeId?: number;
      goldGain?: number;
      buildingType: string;
      towerType: string;
      killerTeamId?: number;
      monsterSubType: string;
      monsterType: string;
      multiKillLength?: number;
      gameId?: number;
      winningTeam?: number;
    }[];
    participantFrames: {
      1: ParticipantFrame;
      2: ParticipantFrame;
      3: ParticipantFrame;
      4: ParticipantFrame;
      5: ParticipantFrame;
      6: ParticipantFrame;
      7: ParticipantFrame;
      8: ParticipantFrame;
      9: ParticipantFrame;
      10: ParticipantFrame;
    };
    timestamp: number;
  }[];
  gameId: number;
  participants: {
    participantId: number;
    puuid: string;
  }[];
}
