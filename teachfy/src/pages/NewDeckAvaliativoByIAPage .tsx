import NewDeckAvaliativoIA from "../components/NewDeckAvaliativo/NewDeckAvaliativoIA";
import Sidebar from "../components/SidebarMenu/Sidebar";

const DeckAvaliativoIAPage = () => {
  const handleCreateDeckAvaliativoIA = (titulo: string, description: string, details: string,numPerguntasMultiplaEscolha:string,numPerguntasDescritivas,string) => {
    // criar lógica para enviar os dados de registro para o banco
  };

return (
    <div>
          <Sidebar/>
          <NewDeckAvaliativoIA onSubmit={handleCreateDeckAvaliativoIA}/>
    </div>
  );
};

export default DeckAvaliativoIAPage;