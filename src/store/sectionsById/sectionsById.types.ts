// -----------------------------------------------
// Types for Social Networks Section
// -----------------------------------------------

export interface SocialNetworks {
  socialNetwork: string;
  link: string;
}

// -----------------------------------------------
// Types for Chronological Order Section
// -----------------------------------------------

export interface ChronologicalOrderLabels {
  title: string;
  subtitle: string;
  description: string;
}

export interface Period {
  initialDate: string;
  endDate?: string;
  current: boolean;
}

export interface ChronologicalOrder {
  title: string;
  subtitle: string;
  description: string;
  period: Period;
  labels: ChronologicalOrderLabels;
}

// -----------------------------------------------
// Types for Skills Section
// -----------------------------------------------

export enum SkillType {
  Hard = 'Hard',
  Soft = 'Soft',
  Other = 'Other',
}

export enum SkillLevel {
  Novice = 'Novice',
  Beginner = 'Beginner',
  Skillful = 'Skillful',
  Experienced = 'Experienced',
  Expert = 'Expert',
}

export interface Skills {
  name: string;
  type: SkillType;
  level: SkillLevel;
}

// -----------------------------------------------
// Types for Languages Section
// -----------------------------------------------

export enum LanguageLevel {
  Beginner = 'Beginner (A1)',
  Elementary = 'Elementary (A2)',
  Intermediate = 'Intermediate (B1)',
  UpperIntermediate = 'Upper Intermediate (B2)',
  Advanced = 'Advanced (C1)',
  Mastery = 'Mastery (C2)',
  NativeSpeaker = 'Native Speaker',
}

export interface Languages {
  name: string;
  level: LanguageLevel;
}

// -----------------------------------------------
// Types for Training Tools Section
// -----------------------------------------------

export interface TrainingTools {
  title: string;
  description: string;
  link: string;
}

// -----------------------------------------------
// Generic Types for SectionById
// -----------------------------------------------

export enum SectionTypeName {
  SocialNetworks = 'SocialNetworks',
  ChronologicalOrder = 'ChronologicalOrder',
  Skills = 'Skills',
  Languages = 'Languages',
  TrainingTools = 'TrainingTools',
  Empty = 'Empty',
}

export type SectionType =
    SocialNetworks
  | ChronologicalOrder
  | Skills
  | Languages
  | TrainingTools;

export interface Section {
  id: string; // uuid
  title: string;
  icon: string; // name or component from font-awesome
  type: SectionTypeName;
  data: null | Array<SectionType>;
}

export interface SectionsByIdState {
  [key: string]: Section
}
