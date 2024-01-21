export default function InputField({ disabled = false, className }) {
  return (
    <>
      <input
        className={`border-orange-light rounded-md border py-1 ${className}`}
        disabled={disabled}
      />
    </>
  );
}
