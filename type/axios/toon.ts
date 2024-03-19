import { WeekNumberProps } from "react-day-picker";

export interface ToonRequest {
  page: number;
  search: string;
  days: number | null;
  toonMark: boolean;
  menu: string | null;
  size: number | null;
}
