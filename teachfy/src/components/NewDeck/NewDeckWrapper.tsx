import { FC } from "react";
import { DeckTypeItem } from "./DeckTypeItem";
import { Link } from "react-router-dom";

type NewDeckWrapperProps = {
    item: DeckTypeItem;
};

const NewDeckWrapper: FC<NewDeckWrapperProps> = ({ item }) => {
    console.log(item);
    return (
        <Link to={item.path}>
            <div>
                {item.icon}
                {item.title}
                {item.description}
            </div>
        </Link>        
    );
};

export default NewDeckWrapper;