import { Point, Span } from "./index.d";
import Rect from "./Rect";

export default class SpaceConverter {
  public readonly domain: Rect;
  public readonly range: Rect;

  constructor(domain: Rect, range: Rect) {
    this.domain = domain;
    this.range = range;
  }

  public point(point: Point): Point {
    return {
      x: this.x(point.x),
      y: this.y(point.y),
    };
  }

  private convert(value: number, domain: Span, range: Span): number {
    // Convert from domain to range
    return (
      ((value - domain[0]) / (domain[1] - domain[0])) * (range[1] - range[0]) +
      range[0]
    );
  }

  public x(value: number): number {
    return this.convert(
      value,
      [this.domain.x, this.domain.x + this.domain.width],
      [this.range.x, this.range.x + this.range.width]
    );
  }

  public y(value: number): number {
    return this.convert(
      value,
      [this.domain.y, this.domain.y + this.domain.height],
      [this.range.y, this.range.y + this.range.height]
    );
  }

  public delta(pointDelta: Point): Point {
    return {
      x: this.dx(pointDelta.x),
      y: this.dy(pointDelta.y),
    };
  }

  public dx(value: number): number {
    return this.x(value) - this.x(0);
  }

  public dy(value: number): number {
    return this.y(value) - this.y(0);
  }

  public invert(): SpaceConverter {
    return new SpaceConverter(
      new Rect(this.range.x, this.range.y, this.range.width, this.range.height),
      new Rect(
        this.domain.x,
        this.domain.y,
        this.domain.width,
        this.domain.height
      )
    );
  }
}
