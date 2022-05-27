// -----------------------------------------------
// Generic Types for LayoutState
// -----------------------------------------------

export enum ColumnFormat {
  One = 'One',
  Two = 'Two',
  Mixed = 'Mixed',
}

export interface SectionsList {
  sectionId: string; // uuid
  columnSize: number;
  order: number;
}

export interface LayoutState {
  columnFormat: ColumnFormat;
  data: Array<SectionsList>;
}
