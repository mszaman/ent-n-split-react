import FormGroup from "./FormGroup";
import InputField from "./InputField";

export default function BillFormInput({ text, disabled }) {
  return (
    <FormGroup text={text} className={`w-2/3`}>
      <InputField className={`w-1/3`} disabled={disabled} />
    </FormGroup>
  );
}
