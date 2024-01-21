import FormGroup from "./FormGroup";
import InputField from "./InputField";

export default function AddFriendFormInput({ text }) {
  return (
    <FormGroup text={text} className={`w-1/2`}>
      <InputField className={`w-1/2`} />
    </FormGroup>
  );
}
