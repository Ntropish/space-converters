class Rect {
  x: number;
  y: number;
  width: number;
  height: number;

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
}

export { Rect };
