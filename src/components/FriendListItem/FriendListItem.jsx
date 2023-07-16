import { FaCircle } from "react-icons/fa";
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? `${css.online}` : `${css.offline}`}><FaCircle/></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};