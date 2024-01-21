export default function Description({ name, balance }) {
  return (
    <>
      <p
        className={`text-xs ${balance < 0 ? "text-red" : balance > 0 ? "text-green" : "text-gray-light"}`}
      >
        {balance < 0
          ? `You owe ${name} $${Math.abs(balance)}`
          : balance > 0
            ? `${name} owes you $${balance}`
            : `You and ${name} are even`}
      </p>
    </>
  );
}
