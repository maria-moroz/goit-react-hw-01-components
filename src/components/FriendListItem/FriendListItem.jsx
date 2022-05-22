import PropTypes from 'prop-types';
import { Fragment } from 'react';
import defaultAvatar from '../default.png';
import s from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  const { avatar = defaultAvatar, name, isOnline } = friend;
  return (
    <Fragment>
      <li className={s.item}>
        <span className={isOnline ? s.isOnline : s.notOnline}></span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
