---
title: 'MongoDB'
path: '/Code Standars/mongoDB'
published: true
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

**\*** No \_ underscores in the middle of names (database, collection, fields) except for manual references.

**\*** Collections database, variables, properties and function names should uselowerCamelCase. They should also be descriptive. Single character variables and uncommon abbreviations should generally be avoided.

**\*** Place spaces between nested parentheticals and elements in JavaScript examples. For example, prefer { [ a, a, a ] } over {[a,a,a]}.

###Collection names

**\*** The name should be a plural of the types of documents to be saved.

**\*** Use camelCase. Normally you shouldn’t have to because the collection name will be one word (plural of the types of documents saved).

**\*** A collection with “” empty string is not a valid collection name.

**\*** A collection name should not contain the null character because this defines the end of collection name.

**\*** Collection name should not start with the prefix “system.” as this is reserved for internal collections.

**\*** It would be good to not contain the character “$” in the collection name as various drivers available for database do not support “$” in collection name.

###Database names
**\*** Try to have the database named after the project and one database per project.

**\*** Use camelCase.

**\*** A database with “” empty string is not a valid database name.

**\*** Database name cannot be more than 64 bytes.

**\*** Database name are case-sensitive, even on non-case-sensitive file systems. Thus it is good to keep name in lower case.

**\*** A database name cannot contain any of these characters “/, \, ., “, \*, <, >, :, |, ?, \$,”. It also cannot contain a single space or null character.

###Field names
**\*** Use camelCase.

**\*** Don’t use \_ underscore as the starting character of the field name. The only field with \_ undescore should be \_id.

**\*** Field names cannot contain . dots or null characters and must not start with a \$ dollar sign.

Manual references are named after the referenced collection. Use the document type (collection name in singular) followed by \_id ( <document>\_id ). This is the only case where you can use underscore in the middle.

For example, in a dogs collection, a document would have manual references to external documents named like this:

```
{
name: 'fido',
owner_id: '5358e4249611f4a65e3068ab',
race_id: '5358ee549611f4a65e3068ac',
colour: 'yellow'
...
}
```

###Functions
**\*** One method per line should be used when chaining methods.
**\*** You should also indent these methods with a tab so it’s easier to tell they are part of the same chain.

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

###Aggregation
**\*** Use one tab as indentation for each level.

**\*** Comma first.

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

###File naming convention
**\*** Separate words with hyphens (i.e. -.).

**\*** File names should have a terse one or two word name that describes the material covered in the document. Allow the path of the file within the document tree to add some of the required context/categorization. For example it’s acceptable to have /core/sharding.rst and /administration/sharding.rst.

```

```
