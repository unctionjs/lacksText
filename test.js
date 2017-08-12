/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import keyChain from "./source"

test(({ok, end}) => {
  ok(lacksText(".")("I have no period"))
  end()
})

test(({notOk, end}) => {
  notOk(lacksText(".")("I have no period."))
  end()
})
