import Overall from './components/Overall';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <Overall />
      </main>
    </div>
  );
}
