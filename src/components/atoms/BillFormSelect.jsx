import FormGroup from "./FormGroup";

export default function BillFormSelect({ text }) {
  return (
    <FormGroup text={text} className={`w-2/3`}>
      <select className=" border-orange-light w-1/3 rounded-md border py-[6px]">
        <option value="you">You</option>
        <option value="x">X</option>
      </select>
    </FormGroup>
  );
}
