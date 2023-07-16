import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem 
                    key={id} 
                    avatar={avatar} 
                    name={name} 
                    isOnline={isOnline} 
                />
            ))}
        </FriendsList>
    )
}