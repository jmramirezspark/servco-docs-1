---
myid: 5
date: '2019-02-25'
title: Field Names
description: ''
thumbnail: ''
published: true
logo: /img/mongodb.png
---

- Use camelCase.

- Don’t use \_ underscore as the starting character of the field name. The only field with \_ undescore should be \_id.

- Field names cannot contain . dots or null characters and must not start with a \$ dollar sign.

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