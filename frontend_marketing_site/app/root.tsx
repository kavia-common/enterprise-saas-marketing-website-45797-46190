import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

// PUBLIC_INTERFACE
export const meta: MetaFunction = () => {
  const title = "OmniCI | Enterprise CI/CD Platform";
  const description =
    "Automate, integrate, and ship faster with a secure and scalable enterprise CI/CD platform. Policy controls, insights, and deep integrations.";
  const image =
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><rect width='1200' height='630' fill='%232563EB'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='72' fill='white'>OmniCI</text></svg>";

  return [
    { title },
    { name: "description", content: description },
    { name: "theme-color", content: "#2563EB" },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:image", content: image },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
};

// PUBLIC_INTERFACE
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect rx=%2218%22 width=%22100%22 height=%22100%22 fill=%22%232563EB%22/><text x=%2250%25%22 y=%2258%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2270%22 fill=%22white%22 font-family=%22Arial%2C%20sans-serif%22>O</text></svg>",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-full antialiased bg-appbg text-textbase">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
