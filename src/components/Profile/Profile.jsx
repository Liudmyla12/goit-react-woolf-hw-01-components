import css from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.stat_item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>
          {followers.toLocaleString('en-US')}
        </span>
      </li>
      <li className={css.stat_item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views.toLocaleString('en-US')}</span>
      </li>
      <li className={css.stat_item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes.toLocaleString('en-US')}</span>
      </li>
    </ul>
  </div>
);

export { Profile };
