
import lacksText from "./index";

test("works", () => {
  expect(lacksText(".")("I have no period")).toBeTruthy();
});

test("works", () => {
  expect(lacksText(".")("I have no period.")).toBeFalsy();
});
