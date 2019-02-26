---
myid: 5
date: '2019-02-25'
title: Declaration
description: ''
logo: /img/reactlogo.svg
---


- Do not use `displayName` for naming components. Instead, name the component by reference.

  ```jsx
  // bad
  export default React.createClass({
    displayName: 'ReservationCard',
    // stuff goes here
  });

  // good
  export default class ReservationCard extends React.Component {
  }
  ```