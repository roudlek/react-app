import react from "react";
import Herooo from './uiComponents/hero2';
import Footer from './uiComponents/footer';
import Product from './uiComponents/product';
import Navbar from './uiComponents/Navbar/Navbar';
import Header from './uiComponents/Header';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
    
    <Header />
    <main className="container mx-auto px-6 py-10">
    <Herooo />

<section className="bg-white shadow-lg rounded-lg p-6 md:p-8">
  <h2 className="text-xl md:text-2xl mb-4 font-semibold">
    Featured Products
  </h2>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />

</section>
      </main>
      <Footer />
    </div>
  );
}
