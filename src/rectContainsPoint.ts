import { Rect } from "./Rect";
import { Point } from "./types";

/**
 * Checks if a point is within a rectangle.
 *
 * @param {Rect} rect The rectangle.
 * @param {Point} point The point to check.
 * @return {Boolean} Returns true if the point is within the rectangle, otherwise false.
 */
export function rectContainsPoint(rect: Rect, point: Point): boolean {
  return (
    point.x >= rect.left &&
    point.x <= rect.right &&
    point.y >= rect.top &&
    point.y <= rect.bottom
  );
}
