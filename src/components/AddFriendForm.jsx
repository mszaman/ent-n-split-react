import AddFriendFormInput from "./atoms/AddFriendFormInput";
import Button from "./atoms/Button";

export default function AddFriendForm() {
  return (
    <form className="bg-orange-lighest mb-8 flex flex-col justify-center gap-4 rounded-lg p-3">
      <AddFriendFormInput text={`🧑‍🤝‍🧑 Friend Name`} />
      <AddFriendFormInput text={`🖼️ Image URL`} />
      <Button className="self-end">Add</Button>
    </form>
  );
}
