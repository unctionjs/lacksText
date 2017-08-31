import {test} from "ramda"
import escapeStringRegexp from "escape-string-regexp"

export default function lacksText (subset: StringType): Function {
  const escaped = escapeStringRegexp(subset)
  const pattern = test(new RegExp(escaped))

  return function lacksTextSubset (set: StringType): boolean {
    return !pattern(set)
  }
}
