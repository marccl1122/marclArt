import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}