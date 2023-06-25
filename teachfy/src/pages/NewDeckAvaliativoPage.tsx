import {NewDeckAvaliativoForm} from "../components/NewDeckAvaliativo/NewDeckAvaliativoForm";
import Sidebar from "../components/SidebarMenu/Sidebar";

const NewDeckPage = () => {
  const handleCreateDeck = (name: string, email: string, password: string) => {
    // criar lógica para enviar os dados de registro para o banco
  };

return (
    <div>
          <Sidebar/>
          <NewDeckAvaliativoForm onSubmit={handleCreateDeck}/>
    </div>
  );
};

export default NewDeckPage;