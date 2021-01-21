import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Saya Halaman Utama</h1>
        <Link href="/random"><a>Bring me to random fetch page</a></Link>
       </main>

    </div>
  )
}
