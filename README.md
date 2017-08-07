# @unction/lacksText


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (string | RegExp) -> string -> boolean

Determines if a set of text does not have a subset of text.

``` javascript
const data = "I love pies!"
const lacksBestFood = lacksText("pizza")

lacksBestFood(data) // false
```

``` javascript
const data = "I love pies!"
const lacksPuncation = lacksText(/\!|\?|\./)

lacksPuncation(data) // false
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/lacksText.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/lacksText.svg?maxAge=2592000&style=flat-square
