import defaultImage from "../images/defaultImage.jpg";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className="status" style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

export default FriendListItem;
