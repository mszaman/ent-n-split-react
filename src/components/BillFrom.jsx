import BillFormInput from "./atoms/BillFormInput";
import BillFormSelect from "./atoms/BillFormSelect";
import Button from "./atoms/Button";

export default function BillForm() {
  return (
    <form className="bg-orange-lighest mb-4 flex flex-col justify-center gap-4 rounded-lg px-10 py-8">
      <h2 className="mb-2 text-2xl font-bold uppercase">split a bill with X</h2>
      <BillFormInput text={`💰 Bill value`} />
      <BillFormInput text={`🕴️ Your expense`} />
      <BillFormInput text={`🧑‍🤝‍🧑 X'x expense`} disabled={true} />
      <BillFormSelect text={`🤑 Who is paying the bill`} />
      <Button className="self-end">Add</Button>
    </form>
  );
}
