import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/screens/Home'), { ssr: true });

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
