/*
 * reactのサンプル
 */

const React = require('react');
const ReactDOM = require('react-dom');

var Test = React.createClass({
  render: function() {
    return (
      <p>こんにちは</p>
    );
  }
});

ReactDOM.render(
  <Test />, document.getElementById('js-content')
);

module.exports = Test;
