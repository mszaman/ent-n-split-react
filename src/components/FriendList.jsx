import Description from "./atoms/Description";
import Button from "./atoms/Button";

export default function FriendList({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`grid grid-cols-[48px_1fr_auto] items-center gap-x-4 rounded-lg  p-3 transition-colors duration-500 hover:bg-orange-lighest ${isSelected && "bg-orange-lighest"}`}
    >
      <img src={friend.image} alt={friend.name} className="rounded-full" />
      <div className="flex flex-col justify-between">
        <h3 className="font-bold">{friend.name}</h3>
        <Description name={friend.name} balance={friend.balance} />
      </div>
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
