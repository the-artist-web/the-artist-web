// components
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Searchbar from "@/components/Searchbar";
import Footer from "@/components/Footer";

const Docs = () => {
  return (
    <>
      <Navbar />
      <Aside />
      <Searchbar file="Sliderbar-html.json" />
      <main className="main">
        <article>
          Body Docs

          <Footer />
        </article>
      </main>
    </>
  )
}

export default Docs