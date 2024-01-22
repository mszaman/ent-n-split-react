import Button from "./atoms/Button";
import FormGroup from "./atoms/FormGroup";

export default function BillForm() {
  return (
    <form className="mb-4 flex flex-col justify-center gap-4 rounded-lg bg-orange-lighest px-10 py-8">
      <h2 className="mb-2 text-2xl font-bold uppercase">split a bill with X</h2>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>💰 Bill value</label>
        <input className={`w-1/3 rounded-md border border-orange-light py-1`} />
      </FormGroup>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>🕴️ Your expense</label>
        <input className={`w-1/3 rounded-md border border-orange-light py-1`} />
      </FormGroup>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>🧑‍🤝‍🧑 X'x expense</label>
        <input
          className={`w-1/3 rounded-md border border-orange-light py-1`}
          disabled
        />
      </FormGroup>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>🤑 Who is paying the bill</label>
        <select className=" w-1/3 rounded-md border border-orange-light py-[6px]">
          <option value="you">You</option>
          <option value="x">X</option>
        </select>
      </FormGroup>
      <Button className="self-end">Add</Button>
    </form>
  );
}
