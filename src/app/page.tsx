import Categories from "./components/Categories";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LatestProducts from "./components/LatestProducts";
import SearchBar from "./components/SearchBar";
import TopNavBar from "./components/TopNavBar";
import Treademarks from "./components/Trademarks";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_auto_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TopNavBar />
      <SearchBar />
      <Categories />
      <Treademarks/>
      <Features/>
      <LatestProducts/>
      <Footer/>
    </div>
  );
}
