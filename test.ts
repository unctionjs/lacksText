
import lacksText from "./index";

test(() => {
  expect(lacksText(".")("I have no period")).toBeTruthy();
});

test(() => {
  expect(lacksText(".")("I have no period.")).toBeFalsy();
});
