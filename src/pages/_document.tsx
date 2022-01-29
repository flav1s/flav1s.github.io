import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocuments extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Flávia Rocha</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
