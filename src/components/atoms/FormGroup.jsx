export default function FormGroup({ children, text, className }) {
  return (
    <div className="flex items-center">
      <label className={`font-bold ${className}`}>{text}</label>
      {children}
    </div>
  );
}
