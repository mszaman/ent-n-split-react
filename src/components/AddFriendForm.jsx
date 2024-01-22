import FormGroup from "./atoms/FormGroup";
import Button from "./atoms/Button";

export default function AddFriendForm() {
  return (
    <form className="mb-8 flex flex-col justify-center gap-4 rounded-lg bg-orange-lighest p-3">
      <FormGroup>
        <label className={`w-1/2 font-bold`}>🧑‍🤝‍🧑 Friend Name</label>
        <input className={`w-1/2 rounded-md border border-orange-light py-1`} />
      </FormGroup>
      <FormGroup>
        <label className={`w-1/2 font-bold`}>🖼️ Image URL</label>
        <input className={`w-1/2 rounded-md border border-orange-light py-1`} />
      </FormGroup>
      <Button className="self-end">Add</Button>
    </form>
  );
}
