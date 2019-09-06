
import lacksText from "./index.ts";

test(() => {
  expect(lacksText(".")("I have no period")).toBeTruthy();
});

test(() => {
  expect(lacksText(".")("I have no period.")).toBeFalsy();
});
