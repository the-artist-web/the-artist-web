// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

const Showcase = () => {
  return (
    <>
      <Navbar />
      <Aside />
      <Searchbar file="Skills.json" />
      <main className="main">
        <article>
          Body Showcase

          <Footer />
        </article>
      </main>
    </>
  )
}

export default Showcase