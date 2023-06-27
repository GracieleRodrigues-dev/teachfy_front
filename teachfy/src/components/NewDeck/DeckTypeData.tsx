
import { GiNotebook } from "react-icons/gi";
import { DeckTypeItem } from "./DeckTypeItem";
import { TbCards } from "react-icons/tb";
export const DeckTypeData: DeckTypeItem[] = [
    {
        title: 'Avaliativo',
        path: '/decks/deck/avaliativo',
        icon: <GiNotebook/>,
        description: "Crie um questionário contendo uma lista de perguntas fechadas com opções pré-definidas para escolha ou, se preferir, questões discursivas."
    },
    {
        title: 'Flashcards',
        path: '/decks/novo-deck/flashcard',
        icon: <TbCards/>,  
        description: "Crie e revise seus próprios flashcards para aprender e reter informações de maneira mais eficiente, utilizando o método de estudos Anki."      
    }
];