import {test} from "ramda";
import escapeStringRegexp from "escape-string-regexp";
import {TextType} from "./types";

export default function lacksText (subset: TextType | RegExp) {
  return function lacksTextSubset (set: TextType): boolean {
    return !test(new RegExp(escapeStringRegexp(subset)))(set);
  };
}
