import { expect } from "chai";
import { Rect } from "../src/Rect";

describe("Rect", () => {
  let rect: Rect;

  beforeEach(() => {
    rect = new Rect(10, 20, 30, 40);
  });

  it("should correctly initialize with constructor values", () => {
    expect(rect.x).to.equal(10);
    expect(rect.y).to.equal(20);
    expect(rect.width).to.equal(30);
    expect(rect.height).to.equal(40);
    expect(rect.left).to.equal(10);
    expect(rect.right).to.equal(40);
    expect(rect.top).to.equal(20);
    expect(rect.bottom).to.equal(60);
  });

  it("should correctly calculate top, right, bottom and left", () => {
    expect(rect.top).to.equal(20);
    expect(rect.right).to.equal(40);
    expect(rect.bottom).to.equal(60);
    expect(rect.left).to.equal(10);
  });

  it("should allow to set x and y coordinates", () => {
    rect.x = 50;
    rect.y = 60;

    expect(rect.x).to.equal(50);
    expect(rect.y).to.equal(60);
  });

  it("should allow to set width and height", () => {
    rect.width = 70;
    rect.height = 80;

    expect(rect.width).to.equal(70);
    expect(rect.height).to.equal(80);
  });

  it("should allow to set top and left", () => {
    rect.top = 90;
    rect.left = 100;

    expect(rect.top).to.equal(90);
    expect(rect.left).to.equal(100);
  });

  it("should correctly serialize to JSON", () => {
    const json = rect.toJSON();

    expect(json).to.deep.equal({
      x: 10,
      y: 20,
      width: 30,
      height: 40,
      top: 20,
      right: 40,
      bottom: 60,
      left: 10,
    });
  });
});
