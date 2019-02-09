---
title: Index
path: '/Index'
published: true
---





# Install dependencies
npm install 

# Run 
gatsby develop
```


## Adding new articles

1. Create md file in `wiki/<topic>/<post>.md`
    - Keep in mind, whatever directory structure you make here will be the link of the post!

2. Setup frontmatter (special markdown header) at the top of the file like so:

```
---
title: 'My First Post!'
path: '/<topic>/<post>.md'
---

```

3. Add post content 👌

```
---
title: 'My First Post!'
path: '/<topic>/<post>.md'
---

# How to add posts
First you must read the README...
```

4. Restart your server
