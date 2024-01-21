import Description from "./atoms/Description";
import Button from "./atoms/Button";

export default function FriendList({ id, image, name, balance }) {
  return (
    <li className="hover:bg-orange-lighest grid grid-cols-[48px_1fr_auto] items-center gap-x-4  rounded-lg p-3 transition-colors duration-500">
      <img src={image} alt={name} className="rounded-full" />
      <div className="flex flex-col justify-between">
        <h3 className="font-bold">{name}</h3>
        <Description name={name} balance={balance} />
      </div>
      <Button>Select</Button>
    </li>
  );
}
