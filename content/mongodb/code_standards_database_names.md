---
myid: 4
date: '2019-02-25'
title: Database Names
description: ''
logo: /img/mongodb.png
---

- Try to have the database named after the project and one database per project.

- Use camelCase.

- A database with “” empty string is not a valid database name.

- Database name cannot be more than 64 bytes.

- Database name are case-sensitive, even on non-case-sensitive file systems. Thus it is good to keep name in lower case.

- A database name cannot contain any of these characters “/, \, ., “, \*, <, >, :, |, ?, \$,”. It also cannot contain a single space or null character.