---
myid: 3
date: '2019-02-25'
title: Add new menu
description: 'How to add a new menu'
logo: /img/question.svg
---

To add a new option in the Main Menu follow this steps:

- Create a folder under 'content'.
- Add at least one markdown file (see [add new post](/howto/add_new_post/)).
- Go to ```content-creators.js``` and add the new folder to ```folders``` and ```courses``` (see below).
```jsx
        const folders = [
          '/nodejs',
          '/reactjs',
          '/mongodb',
          '/howto',
        ]
```

```jsx
        const courses = [
          'nodejs',
          'reactjs',
          'mongodb',
          'howto',
        ]
```
- That's all, now start adding your markdowns!!