import { moveDirections } from "./moveDirections";
import { takeDirections } from "./takeDirections";

export const whitePawn = {
  moveDirections,
  takeDirections,
} as const;
