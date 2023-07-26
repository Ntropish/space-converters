import { Rect } from "./Rect";

/**
 * Determines the intersection area of two rectangles and returns a new Rect instance representing this area.
 * If there is no intersection, it returns null.
 *
 * @param {Rect} rect1 - The first rectangle.
 * @param {Rect} rect2 - The second rectangle.
 *
 * @returns {Rect | null} A new Rect instance representing the intersection area, or null if there is no intersection.
 */
export function intersectRects(rect1: Rect, rect2: Rect): Rect | null {
  const x = Math.max(rect1.left, rect2.left);
  const y = Math.max(rect1.top, rect2.top);
  const width = Math.min(rect1.right, rect2.right) - x;
  const height = Math.min(rect1.bottom, rect2.bottom) - y;

  if (width < 0 || height < 0) {
    return null; // No intersection
  }

  return new Rect(x, y, width, height);
}
