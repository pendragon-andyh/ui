const util = require("./util");

describe("util.isObject()", () => {
  test("When parameter is class-instance then result is true", () => {
    expect(util.isObject(new TestClass())).toBe(true);
  });
  test("When parameter is anonymous-object then result is true", () => {
    expect(util.isObject({ a: "hello" })).toBe(true);
  });
  test("When parameter is array then result is false", () => {
    expect(util.isObject([1, 2])).toBe(false);
  });
  test("When parameter is string then result is false", () => {
    expect(util.isObject("hello")).toBe(false);
  });
  test("When parameter is SVGElement then result is false", () => {
    const shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    shape.setAttribute("cx", 25);
    shape.setAttribute("cy", 25);
    shape.setAttribute("r",  20);
    shape.setAttribute("fill", "green");
    expect(util.isObject(shape)).toBe(false);
  });
  test("When parameter is HTMLElement then result is false", () => {
    const div = document.createElement("div");
    expect(util.isObject(div)).toBe(false);
  });
  
  class TestClass {
  }
});
