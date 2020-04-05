import matchesRegExp from "@unction/matchesregexp";
import escapeStringRegexp from "escape-string-regexp";

export default function lacksText (subset: string) {
  return function lacksTextSubset (set: string): boolean {
    return !matchesRegExp(new RegExp(escapeStringRegexp(subset)))(set);
  };
}
