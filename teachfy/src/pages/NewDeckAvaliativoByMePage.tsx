import { useLocation } from "react-router-dom";
import NewDeckAvaliativoMe  from "../components/NewDeckAvaliativo/NewDeckAvaliativoForMe"; ;
import Sidebar from "../components/SidebarMenu/Sidebar";


const NewDeckAvaliativoPage =() => {
  const location = useLocation(); // Use o hook useLocation para obter a localização atual
  const { state } = location;
  const { title, description, typeperguntas, perguntas } = state || {};

return (
    <div>
          <Sidebar/>
          <NewDeckAvaliativoMe title={title} description={description} typeperguntas={typeperguntas} perguntas={perguntas}/>
    </div>
  );
};

export default NewDeckAvaliativoPage;
