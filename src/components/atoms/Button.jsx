export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`bg-orange-medium hover:bg-orange-dark text-gray-dark w-fit rounded-lg px-3 py-1 font-bold transition-colors duration-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
