---
myid: 3
date: '2019-02-25'
title: Collection Names
description: ''
thumbnail: ''
published: true
logo: /img/mongodb.png
---

- The name should be a plural of the types of documents to be saved.

- Use camelCase. Normally you shouldn’t have to because the collection name will be one word (plural of the types of documents saved).

- A collection with “” empty string is not a valid collection name.

- A collection name should not contain the null character because this defines the end of collection name.

- Collection name should not start with the prefix “system.” as this is reserved for internal collections.

- It would be good to not contain the character “$” in the collection name as various drivers available for database do not support “$” in collection name.