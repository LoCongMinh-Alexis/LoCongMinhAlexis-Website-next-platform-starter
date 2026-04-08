import Link from 'next/link';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const ctx = getNetlifyContext();

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Hello, I'm Lo Cong Minh (Alexis)
        </h1>

        <p className="text-gray-600 text-lg">
          I write about discipline, gym and self-development.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/blog"
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            Read Blog
          </a>

          <a
            href="/about"
            className="px-6 py-2 border border-black rounded-lg"
          >
            About Me
          </a>
        </div>
      </section>
    </main>
  );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time ({now}).</p>
            </Card>
        );
    }
}
