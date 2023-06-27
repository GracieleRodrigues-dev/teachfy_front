import { FC } from "react";
import { DeckTypeItem } from "./DeckTypeItem";
import { Link } from "react-router-dom";
import '../../styles/newDeckWrapper.css';

type NewDeckWrapperProps = {
    item: DeckTypeItem;
};

const NewDeckWrapper: FC<NewDeckWrapperProps> = ({ item }) => {
    console.log(item);
    return (
        <Link to={item.path}>
            <div className="newDeckWrapper card text-center m-3">
                <div className="card-body">
                    <h4 className="card-title">
                        <p>{item.icon}</p>
                        <p>{item.title}</p>
                    </h4>
                    <div>
                        {item.description}
                    </div>
                </div>
            </div>       
        </Link> 
    );
};

export default NewDeckWrapper;