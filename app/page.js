import List from "./components/List/List";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/games`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List data={data} />
    </main>
  );
}
