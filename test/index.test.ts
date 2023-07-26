import { expect } from "chai";
import { SpaceConverter } from "../src/SpaceConverter";
import { Rect } from "../src/Rect";
import { Point } from "../src/index";

describe("SpaceConverter", () => {
  describe("constructor", () => {
    it("should initialize domain and range", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 20, 20);
      const converter = new SpaceConverter(domain, range);

      expect(converter.domain).to.deep.equal(domain);
      expect(converter.range).to.deep.equal(range);
    });
  });

  describe("point", () => {
    it("should convert point from domain to range", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 100, 100);
      const converter = new SpaceConverter(domain, range);
      const point: Point = { x: 5, y: 5 };

      const result = converter.point(point);

      expect(result).to.deep.equal({ x: 50, y: 50 });
    });
  });

  describe("x", () => {
    it("should convert x value from domain to range", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 100, 100);
      const converter = new SpaceConverter(domain, range);

      const result = converter.x(5);

      expect(result).to.equal(50);
    });
  });

  describe("y", () => {
    it("should convert y value from domain to range", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 100, 100);
      const converter = new SpaceConverter(domain, range);

      const result = converter.y(5);

      expect(result).to.equal(50);
    });
  });

  describe("delta", () => {
    it("should return delta of the point", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 20, 20);
      const converter = new SpaceConverter(domain, range);
      const pointDelta: Point = { x: 5, y: 5 };

      const result = converter.delta(pointDelta);

      expect(result).to.deep.equal({ x: 10, y: 10 });
    });
  });

  describe("dx", () => {
    it("should return delta of x", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 20, 20);
      const converter = new SpaceConverter(domain, range);

      const result = converter.dx(5);

      expect(result).to.equal(10);
    });
  });

  describe("dy", () => {
    it("should return delta of y", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 20, 20);
      const converter = new SpaceConverter(domain, range);

      const result = converter.dy(5);

      expect(result).to.equal(10);
    });
  });

  describe("invert", () => {
    it("should return a new SpaceConverter with inverted domain and range", () => {
      const domain = new Rect(0, 0, 10, 10);
      const range = new Rect(0, 0, 20, 20);
      const converter = new SpaceConverter(domain, range);

      const inverted = converter.invert();

      expect(inverted.domain).to.deep.equal(range);
      expect(inverted.range).to.deep.equal(domain);
    });
  });
});
