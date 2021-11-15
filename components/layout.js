import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
       <Head>
        <title>Basic Next.js App - Jaruwan Pattanasing</title>
      </Head>
      <header>
      <Link href="/">
        <a title='Home'>
        <div className="container-fluid page_heder"> Basic Headless CMS-Powered App</div>
        </a>
        </Link>
        <img src="images/beads.gif" alt="" className="img-fluid"/>
      
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
          <a title='Go back home' className="btn secondary mt-3">← Back to home</a>
        </Link>
        )
      }
      <footer>
        <div className="webFooter text-center">
    <p className="text-center mt-1">Week 12: Assignment 12: Basic Headless CMS-Powered App</p>
    by Jaruwan Pattanasing</div>
      </footer>
    </div>
  );
}