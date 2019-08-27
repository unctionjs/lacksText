
import {test} from "tap";

import lacksText from "./";

test(({ok, end}) => {
  ok(lacksText(".")("I have no period"));
  end();
});

test(({notOk, end}) => {
  notOk(lacksText(".")("I have no period."));
  end();
});
