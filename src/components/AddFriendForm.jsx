import FormGroup from "./atoms/FormGroup";
import Button from "./atoms/Button";

export default function AddFriendForm({
  name,
  setName,
  image,
  setImage,
  onAddFriend,
}) {
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newFriend = {
      id,
      name,
      balance: 0,
      image: `${image}?=${id}`,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form
      className="mb-8 flex flex-col justify-center gap-4 rounded-lg bg-orange-lighest p-3"
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label className={`w-1/2 font-bold`}>🧑‍🤝‍🧑 Friend Name</label>
        <input
          className={`w-1/2 rounded-md border border-orange-light py-2 indent-3 text-xs`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label className={`w-1/2 font-bold`}>🖼️ Image URL</label>
        <input
          className={`w-1/2 rounded-md border border-orange-light py-2 indent-3 text-xs`}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </FormGroup>
      <Button className="self-end">Add</Button>
    </form>
  );
}
