const Document = require('next/document').default || require('next/document');
const React = require('react');

class MyDocument extends Document {
  render() {
    return (
      React.createElement('html', { lang: 'tr' },
        React.createElement('head', null),
        React.createElement('body', null,
          React.createElement('div', { id: '__next' })
        )
      )
    );
  }
}

module.exports = MyDocument;
