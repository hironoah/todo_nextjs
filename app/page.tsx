import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Todoアプリへようこそ!</h1>
      <Link href='/todo'>助けて</Link>
    </>
  );
}
