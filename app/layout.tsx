import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yanala Raghuvamshi Reddy</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
