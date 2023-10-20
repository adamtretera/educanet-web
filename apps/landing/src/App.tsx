import { TopicsList } from "./components";

function App() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center dark text-foreground bg-background">
        <section>
          <header className="py-4">
            <h1 className="text-3xl font-bold ">Educanet</h1>
          </header>
          <TopicsList />
        </section>
      </main>
    </>
  );
}

export default App;
