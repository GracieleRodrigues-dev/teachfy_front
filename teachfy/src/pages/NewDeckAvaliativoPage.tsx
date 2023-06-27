

import DeckAvaliativo from "../components/NewDeckAvaliativo/DeckAvaliativo";
import Sidebar from "../components/SidebarMenu/Sidebar";

const DeckAvaliativoPage = () => {
  const handleCreateDeck = ( title: string,description: string,directory: string,isPublic: boolean, isDuplicable: boolean,allowFeedback: boolean,
selectedCard: string ) => {
  };

return (
    <div>
          <Sidebar/>
          <DeckAvaliativo onSubmit={handleCreateDeck} titulo={""} descricao={""} diretorio={""} deckPublico={false} permitirDuplicacao={false} gerarFeedback={false}/>
    </div>
  );
};

export default DeckAvaliativoPage;