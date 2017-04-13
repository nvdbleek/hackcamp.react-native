export interface Coordinate {
  latitude: number
  longitude: number
}

export interface ITruck {
  name: string
  uuid: string
  color: number
  coordinate: Coordinate
  active: boolean
  speed?: number
}

export enum EFilter {
  NONE = 0,
  ACTIVE = 1,
  INACTIVE = 2,
}

export type IFilters = "none" | "active" | "inactive";
export const filters = ["none", "active", "inactive"];
