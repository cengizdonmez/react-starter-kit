import Header from './components/Header';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <div className="wrapper bg-gray-800 text-white ">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          App
        </div>
      </div>
      <Footer />
    </>
  );
}
