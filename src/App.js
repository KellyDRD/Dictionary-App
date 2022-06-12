import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="planet" />
        </main>
        <footer className="text-center">
          <small>
            Coded by Kelly Roan and opened source on{" "}
            <a
              href="https://github.com/KellyDRD/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
