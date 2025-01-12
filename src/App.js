import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Today from './components/Today';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Content />

        <Today />
      </main>

      <Footer />
    </>
  );
}

export default App;
