/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import lacksText from "./source.js"

test(({ok, end}) => {
  ok(lacksText(".")("I have no period"))
  end()
})

test(({notOk, end}) => {
  notOk(lacksText(".")("I have no period."))
  end()
})
