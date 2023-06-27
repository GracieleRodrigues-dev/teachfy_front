import { DeckTypeData } from "./DeckTypeData";
import NewDeckWrapper from "./NewDeckWrapper";

const NewDeckForm = () => {
return (
    <div className="newDeck-container">
      <div className="newDeck-section">
        <h2 className="newDeck-title">Novo Deck de Estudos</h2>
        <h3 className="newDeck-subtitle">Primeiro, selecione o tipo do deck a ser criado</h3>
        <div className="newDeck-wrapper d-flex">
          {DeckTypeData.map((item, index) => {
            return <NewDeckWrapper item={item} key={index} />;
          })}
        </div>    
      </div>
    </div>
  );
};

export default NewDeckForm;
