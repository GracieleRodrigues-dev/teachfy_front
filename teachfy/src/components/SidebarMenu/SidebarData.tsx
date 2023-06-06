import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineBook,
    BsPlusCircleDotted,
    TbCards,
    TbBuildingCommunity,
    FaCog,
    GoGraph,
    BiHelpCircle
} from 'react-icons/all';
import { SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Decks',
        path: '/decks',
        icon: <AiOutlineBook/>,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Meus Decks',
                path: '/decks/meus-decks',
                icon: <TbCards />,
            },
            {
                title: 'Novo Deck',
                path: '/decks/novo-deck',
                icon: <BsPlusCircleDotted />,
            }
        ]
    },
    {
        title: 'Comunidade',
        path: '/community',
        icon: <TbBuildingCommunity />
    },
    {
        title: 'Desempenho',
        path: '/desempenho',
        icon: <GoGraph />
    },
    {
        title: 'Ajuda',
        path: '/ajuda',
        icon: <BiHelpCircle/>
    },
    {
        title: 'Configurações',
        path: '/configurations',
        icon: <FaCog />
    }
];