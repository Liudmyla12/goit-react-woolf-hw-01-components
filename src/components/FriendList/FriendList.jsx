import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(({ id, ...data }) => (
      <FriendListItem key={id} {...data} />
    ))}
  </ul>
);

export { FriendList };
