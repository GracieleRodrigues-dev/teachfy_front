import { useLocation } from "react-router-dom";
import { NewDeckFlashCardByMeForm } from "../components/NewDeckFlashcard/NewDeckFlashCardByMeForm";
import Sidebar from "../components/SidebarMenu/Sidebar";


const NewDeckFlashCardPage =() => {
  const location = useLocation(); // Use o hook useLocation para obter a localização atual
  const { state } = location;
  const { title, description, directory, isPublic, isDuplicable } = state || {};

return (
    <div>
          <Sidebar/>
          <NewDeckFlashCardByMeForm title={title} description={description} directory={directory} isPublic={isPublic} isDuplicable={isDuplicable}/>
    </div>
  );
};

export default NewDeckFlashCardPage;