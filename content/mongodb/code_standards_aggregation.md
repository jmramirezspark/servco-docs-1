---
myid: 7
date: '2019-02-25'
title: Aggregation
description: ''
logo: /img/mongodb.png
---


- Use one tab as indentation for each level.

- Comma first.

The { } curly braces enclosing a whole stage (including its name) will be on the same level as the aggregate function.

Example:

```
db.zips.aggregate( [
{
$match:
		{ $or: [ {state:'CA'}, {state:'NY'} ] }
}
```

Unary operators ($gt, $lte, $sum, $avg, etc), their operands, and the field they affect go on a single line.

```
OK
{
$match:
		{ $or: [ {state:'CA'}, {state:'NY'} ] }
},
```

```
NOT OK:
{
$match:
		{ $or: [

{state:'CA'},

{state:'NY'}

]
}
},

```

If there is only one component/object in the stage or if it’s a logical operator (and, or), the { opening braces and } closing braces after the stage name should go on that same line.

```

OK
{
$match:
		{ $or: [ { state:'CA' }, { state:'NY' } ] }
},
{
\$sort:
{ 'population': -1 }
}

```

```

NOT OK:
{
$match:
{ $or: [

{ state:'CA' },

{ state:'NY' } ]
}
},
{
\$sort: { 'population': -1 }
}

```

Otherwise, the name of the stage and the { opening curly brace of its block should be on the same line, and the } closing bracket of the stage will be on its own line.

```

OK
{
$group: {
		_id: {
			city: '$city',
state: '$state' },
		population: { $sum: '\$pop' }
}
},

```

```

NOT OK:
{
$group:
{
\_id: {
city: '$city',
state: '$state' },
population: { $sum: '\$pop' } }
},

```

Use a new line for each component. Here’s an example:

```

{
\$sort: {
'population': -1,
'\_id.state': 1
}
},

```

The ] closing bracket of the aggregation stages array will not share the line with the } closing curly brace of a stage.

```

OK
db.zips.aggregate( [
{
$match:
		{ $or: [ {state:'CA'}, {state:'NY'} ] }
}
] );
},

```

```

NOT OK:
db.zips.aggregate( [
{
$match:
		{ $or: [ {state:'CA'}, {state:'NY'} ] }
} ] );

```

Here’a an example of aggregation with the above rules:

```

db.zips.aggregate( [
{
$match:
		{ $or: [ {state:'CA'}, {state:'NY'} ] }
},
{
$group: {
		_id: {
			city: '$city',
state: '$state' },
		population: { $sum: '$pop' }
	}
},
{
	$match:
{ 'population': { $gt: 25000 } }
},
{
	$sort: {
'population': -1,
'\_id.state': 1
}
},
{
$group: {
		_id: null,
		avg: { $avg: '\$population' }
}
}
] );

```