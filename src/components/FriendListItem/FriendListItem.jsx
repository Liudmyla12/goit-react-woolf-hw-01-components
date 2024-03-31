import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={css.status}
      style={{ backgroundColor: isOnline ? '#66AC5B' : '#F05C5C' }}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

export { FriendListItem };
