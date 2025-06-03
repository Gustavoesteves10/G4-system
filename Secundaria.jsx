import Grafico from "../assets/imagem/Grafico.jpg"

function Secundaria() {
    return(

<section className="mt-40 px-0 pb-60">
        <div className="bg-white text-green-700 max-w-5xl  h-96 mx-auto rounded-xl p-6 shadow-lg flex flex-row">
            <div class="alinhar">
            <h3 className="text-5xl font-medium mb-8 mt-4">G4 Tasks</h3>

          <p className="text-3xl">
            Gerencie seus projetos e tarefas com nossa ferramenta fácil de usar. 
            Aumente sua produtividade e mantenha-se organizado com recursos de 
            gerenciamento de tarefas intuitivos.
        </p>
            </div>
         
        <img
          src={Grafico}
          alt="Grafico"
          className="w-[300px] md:w-[300px] lg:w-[300px] h-64 mt-10"
          />
        </div>
      </section>
    );
}

export default Secundaria;