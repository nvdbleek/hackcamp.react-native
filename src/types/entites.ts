export interface ITruck {
  name: string,
  active: boolean,
}

export enum EFilter {
  NONE = 0,
  ACTIVE = 1,
  INACTIVE = 2,
}

export type IFilters = "none" | "active" | "inactive";
export const filters =  ["none", "active", "inactive"];
