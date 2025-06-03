import Seras from "../assets/imagem/Seras.png"
import { useEffect } from "react";
import { getScrollToPlanos, setScrollToPlanos } from "../scrollToPlanos";

function Home () {
  useEffect(() => {
    if (getScrollToPlanos()) {
      setTimeout(() => {
        const el = document.getElementById("planos");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setScrollToPlanos(false);
      }, 700);
    }
  });

    return( 
        <section className="h-screen flex flex-col items-center justify-center text-center px-0 pt-16">
                <h2 className="text-6xl font-bold mb-6">
                  Organize seus projetos com facilidade
                </h2>
                <img
                  src={Seras}
                  alt="Ilustração"
                  className="w-[500px] md:w-[600px] lg:w-[700px]"
                />
              </section>
    );
}

export default Home;