import {test} from "ramda";
import escapeStringRegexp from "escape-string-regexp";
export default function lacksText (subset) {
  const escaped = escapeStringRegexp(subset);
  const pattern = test(new RegExp(escaped));


  return function lacksTextSubset (set) {
    return !pattern(set);
  };
}
