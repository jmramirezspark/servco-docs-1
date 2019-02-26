---
myid: 3
date: '2019-02-25'
title: Class vs React.createClass vs stateless
description: 'Class vs React.createClass vs stateless'
logo: /img/reactlogo.svg
---

- If you have internal state and/or refs, prefer `class extends React.Component` over `React.createClass`. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

  ```jsx
  // bad
  const Listing = React.createClass({
    // ...
    render() {
        return <div>{this.state.hello}</div>;
      },
  });

  // good
  class Listing extends React.Component {
    // ...
    render() {
        return <div>{this.state.hello}</div>;
      }
  }
  ```

  And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:

  ```jsx
  // bad
  class Listing extends React.Component {
    render() {
      return <div>{this.props.hello}</div>;
    }
  }

  // bad (relying on function name inference is discouraged)
  const Listing = ({ hello }) => <div>{hello}</div>;

  // good
  function Listing({ hello }) {
    return <div>{hello}</div>;
  }
  ```
