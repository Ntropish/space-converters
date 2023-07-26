/**
 * Rect class, an alternative to DOMRect, representing a rectangle with x, y coordinates and dimensions.
 * This class mimics the properties of a DOMRect and includes getters for top, right, bottom, and left,
 * making it compatible and interchangeable with a DOMRect in most cases.
 */
class Rect {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

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
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  /**
   * Get the x-coordinate of the rectangle.
   * @return {number} The x-coordinate of the rectangle.
   */
  get x(): number {
    return this._x;
  }

  /**
   * Get the y-coordinate of the rectangle.
   * @return {number} The y-coordinate of the rectangle.
   */
  get y(): number {
    return this._y;
  }
  /**
   * Get the top value (same as y-coordinate) of the rectangle.
   * @return {number} The top value of the rectangle.
   */
  get top(): number {
    return this._y;
  }

  /**
   * Get the right value of the rectangle.
   * @return {number} The right value (x-coordinate plus width) of the rectangle.
   */
  get right(): number {
    return this._x + this._width;
  }

  /**
   * Get the bottom value of the rectangle.
   * @return {number} The bottom value (y-coordinate plus height) of the rectangle.
   */
  get bottom(): number {
    return this._y + this._height;
  }

  /**
   * Get the width of the rectangle.
   * @return {number} The width of the rectangle.
   */
  get width(): number {
    return this._width;
  }

  /**
   * Get the height of the rectangle.
   * @return {number} The height of the rectangle.
   */
  get height(): number {
    return this._height;
  }

  /**
   * Get the left value (same as x-coordinate) of the rectangle.
   * @return {number} The left value of the rectangle.
   */
  get left(): number {
    return this._x;
  }

  /**
   * Set the top value (y-coordinate) of the rectangle.
   * @param {number} value - The new top value.
   */
  set top(value: number) {
    this._y = value;
  }

  /**
   * Set the left value (x-coordinate) of the rectangle.
   * @param {number} value - The new left value.
   */
  set left(value: number) {
    this._x = value;
  }
  /**
   * Set the x-coordinate of the rectangle.
   * @param {number} value - The new x-coordinate.
   */
  set x(value: number) {
    this._x = value;
  }

  /**
   * Set the y-coordinate of the rectangle.
   * @param {number} value - The new y-coordinate.
   */
  set y(value: number) {
    this._y = value;
  }

  /**
   * Set the bottom value (y-coordinate plus height) of the rectangle.
   * @param {number} value - The new bottom value.
   */
  set bottom(value: number) {
    this._y = value - this._height;
  }

  /**
   * Set the right value (x-coordinate plus width) of the rectangle.
   * @param {number} value - The new right value.
   */
  set right(value: number) {
    this._x = value - this._width;
  }

  /**
   * Set the width of the rectangle.
   * @param {number} value - The new width.
   */
  set width(value: number) {
    this._width = value;
  }

  /**
   * Set the height of the rectangle.
   * @param {number} value - The new height.
   */
  set height(value: number) {
    this._height = value;
  }

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
      _x: this._x,
      _y: this._y,
      _width: this._width,
      _height: this._height,
    };
  }
}

export { Rect };
