---
myid: 6
date: '2019-02-25'
title: Functions
description: ''
logo: /img/mongodb.png
---

- One method per line should be used when chaining methods.
- You should also indent these methods with a tab so it’s easier to tell they are part of the same chain.

If you need to use a long query, projection or options object for a function, assign it to a var and use the var in the function call to improve readability.

```
OK
var proj = {
\_id: 0,
a: 1,
b: 1,
c: 1,
d: 1,
e: 1 };
db.zips.find( { a: 2 }, proj );
```

```
NOT OK:
db.zips.find( { a: 2 }
, { \_id: 0
, a: 1
, b: 1
, c: 1
, d: 1
, e: 1} );
```