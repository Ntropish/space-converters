/**
 * `Rect` class, an alternative to `DOMRect`, representing a rectangle with x, y coordinates and dimensions.
 * This class mimics the properties of a `DOMRect` and includes getters for top, right, bottom, and left,
 * making it compatible and interchangeable with a `DOMRect` in most cases.
 */
class Rect {
  /** The x-coordinate of the rectangle. */
  public x: number;

  /** The y-coordinate of the rectangle. */
  public y: number;

  /** The width of the rectangle. */
  public width: number;

  /** The height of the rectangle. */
  public height: number;

  /**
   * Create a new rectangle.
   * @param {number} x - The x-coordinate of the rectangle (default is 0).
   * @param {number} y - The y-coordinate of the rectangle (default is 0).
   * @param {number} width - The width of the rectangle (default is 0).
   * @param {number} height - The height of the rectangle (default is 0).
   */
  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * Get the top value (same as y-coordinate) of the rectangle.
   * @return {number} The top value of the rectangle.
   */
  get top(): number {
    return this.y;
  }

  /**
   * Get the right value of the rectangle.
   * @return {number} The right value (x-coordinate plus width) of the rectangle.
   */
  get right(): number {
    return this.x + this.width;
  }

  /**
   * Get the bottom value of the rectangle.
   * @return {number} The bottom value (y-coordinate plus height) of the rectangle.
   */
  get bottom(): number {
    return this.y + this.height;
  }

  /**
   * Get the left value (same as x-coordinate) of the rectangle.
   * @return {number} The left value of the rectangle.
   */
  get left(): number {
    return this.x;
  }

  /**
   * Set the top value (y-coordinate) of the rectangle.
   * @param {number} value - The new top value.
   */
  set top(value: number) {
    this.y = value;
  }

  /**
   * Set the bottom value (y-coordinate plus height) of the rectangle.
   * @param {number} value - The new bottom value.
   */
  set bottom(value: number) {
    this.y = value - this.height;
  }

  /**
   * Set the left value (x-coordinate) of the rectangle.
   * @param {number} value - The new left value.
   */
  set left(value: number) {
    this.x = value;
  }

  /**
   * Set the right value (x-coordinate plus width) of the rectangle.
   * @param {number} value - The new right value.
   */
  set right(value: number) {
    this.x = value - this.width;
  }

  /**
   * Convert the rectangle's properties to a JSON object.
   * @return {object} A JSON object representation of the rectangle.
   */
  toJSON(): object {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left,
    };
  }
}

export { Rect };
