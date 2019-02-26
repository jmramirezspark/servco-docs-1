---
myid: 2
date: '2019-02-25'
title: Basic Roles
description: ''
logo: /img/mongodb.png
---


Use tabs to indent.

This applies to all MongoDB-specific code (chained functions)
and objects used by MongoDB (queries, projections, documents).

Always have a space after a : colon.

Comma-last.

If you divide the components of an object/array into various lines, use one line for each component.
The } closing curly brace should follow the last component (except for aggregation).

```
OK
{
\$sort: {
'population': -1,
'\_id.state': 1,
‘zipCode’: 1
}
},

var proj = {
\_id: 0,
a: 1,
b: 1,
c: 1,
d: 1,
e: 1 };
NOT OK:
{
\$sort: {
'population': -1, '\_id.state': 1,
‘zipCode’: 1
}
},

var proj = { _id: 0, a: 1, b: 1,
c: 1, d: 1, e: 1 };
```

- No \_ underscores in the middle of names (database, collection, fields) except for manual references.

- Collections database, variables, properties and function names should uselowerCamelCase. They should also be descriptive. Single character variables and uncommon abbreviations should generally be avoided.

- Place spaces between nested parentheticals and elements in JavaScript examples. For example, prefer { [ a, a, a ] } over {[a,a,a]}.