import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// Keep a minimal Document class to satisfy pages router prerendering.
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
