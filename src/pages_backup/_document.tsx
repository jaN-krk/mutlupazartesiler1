import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// Minimal Document implementation for pages router error page prerendering
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
