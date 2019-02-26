
# Install Gatsby-CLI
npm install --global gatsby-cli

# Install dependencies
npm install 

# Run 
gatsby develop



## Adding new articles

1. Create md file in `content/<topic>/<post>.md`.

2. Setup frontmatter (special markdown header) at the top of the file like so:

```
---
myid: 1
date: '2019-02-25'
title: Introduction
description: 'Code standard to follow in ServCo project'
logo: /img/reactlogo.svg
---

```

3. Add post content 👌

```
---
myid: 1
date: '2019-02-25'
title: Introduction
description: 'Code standard to follow in ServCo project'
logo: /img/reactlogo.svg
---

# How to add posts
First you must read the README...
```

4. Restart your server