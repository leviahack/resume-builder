// -----------------------------------------------
// Types for Header Settings
// -----------------------------------------------

export interface HeaderSettings {
  alignment: Alignment;
}

// -----------------------------------------------
// Types for Title Settings
// -----------------------------------------------

export enum TitleStyle {
  Simple = 'Simple',
  Underline = 'Underline',
  Square = 'Square',
  Rounded = 'Rounded',
}

export interface TitleSettings {
  alignment: Alignment;
  style: TitleStyle;
}

// -----------------------------------------------
// Types for Typography Settings
// -----------------------------------------------

export enum FontType {
  Serif = 'Serif',
  SanSerif = 'SanSerif',
}

export interface TypographySettings {
  fontType: FontType;
  fontName: string;
}

// -----------------------------------------------
// Types for Palette Settings
// -----------------------------------------------

export interface PaletteSettings {
  documentBackgroundColor: string;
  documentTextColorPrimary: string;
  documentTextColorSecondary: string;
  headerBackgroundColor: string;
  headerTextColorPrimary: string;
  headerTextColorSecondary: string;
}

// -----------------------------------------------
// Types for Progress Settings
// -----------------------------------------------

export enum ProgressStyle {
  TextOnly = 'TextOnly',
  ProgressBar = 'ProgressBar',
}

export interface ProgressSettings {
  style: ProgressStyle;
}

// -----------------------------------------------
// Generic types for DesignState
// -----------------------------------------------

export enum Alignment {
  Left = 'Left',
  Center = 'Center',
  Right = 'Right',
}

export interface DesignState {
  headerSettings: HeaderSettings;
  titleSettings: TitleSettings;
  typographySettings: TypographySettings;
  paletteSettings: PaletteSettings;
  progressSettings: ProgressSettings;
}
