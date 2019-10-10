const greeting = require("./example");

it("should say hello", () => {
  expect(greeting()).toBe("hello");
});
