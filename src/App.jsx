function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="mx-auto w-[340px]">
          <ul className="mb-8 flex flex-col gap-1">
            {initialFriends.map((f) => (
              <li
                key={f.id}
                className="hover:bg-orange-lighest grid grid-cols-[48px_1fr_auto] items-center gap-x-4  rounded-lg p-3 transition-colors duration-500"
              >
                <img src={f.image} alt={f.name} className="rounded-full" />
                <div className="flex flex-col justify-between">
                  <h3 className="font-bold">{f.name}</h3>
                  <Description {...f} />
                </div>
                <Button>Select</Button>
              </li>
            ))}
          </ul>
          <form className="bg-orange-lighest mb-8 flex flex-col justify-center gap-4 rounded-lg p-3">
            <AddFriendFormInput text={`🧑‍🤝‍🧑 Friend Name`} />
            <AddFriendFormInput text={`🖼️ Image URL`} />
            <Button className="self-end">Add</Button>
          </form>
          <Button className={`float-end`}>Add Friend</Button>
        </div>
        <div className="mx-auto w-[440px]">
          <form className="bg-orange-lighest mb-4 flex flex-col justify-center gap-4 rounded-lg px-10 py-8">
            <h2 className="mb-2 text-2xl font-bold uppercase">
              split a bill with X
            </h2>
            <BillFormInput text={`💰 Bill value`} />
            <BillFormInput text={`🕴️ Your expense`} />
            <BillFormInput text={`🧑‍🤝‍🧑 X'x expense`} disabled={true} />
            <BillFormSelect text={`🤑 Who is paying the bill`} />
            <Button className="self-end">Add</Button>
          </form>
        </div>
      </div>
    </>
  );
}

function AddFriendFormInput({ text }) {
  return (
    <FormGroup text={text} className={`w-1/2`}>
      <InputField className={`w-1/2`} />
    </FormGroup>
  );
}

function BillFormInput({ text, disabled }) {
  return (
    <FormGroup text={text} className={`w-2/3`}>
      <InputField className={`w-1/3`} disabled={disabled} />
    </FormGroup>
  );
}

function BillFormSelect({ text }) {
  return (
    <FormGroup text={text} className={`w-2/3`}>
      <select className=" border-orange-light w-1/3 rounded-md border py-[6px]">
        <option value="you">You</option>
        <option value="x">X</option>
      </select>
    </FormGroup>
  );
}

function FormGroup({ children, text, className }) {
  return (
    <div className="flex items-center">
      <label className={`font-bold ${className}`}>{text}</label>
      {children}
    </div>
  );
}

function InputField({ disabled = false, className }) {
  return (
    <>
      <input
        className={`border-orange-light rounded-md border py-1 ${className}`}
        disabled={disabled}
      />
    </>
  );
}

function Button({ children, onClick, className }) {
  return (
    <button
      className={`bg-orange-medium hover:bg-orange-dark text-gray-dark w-fit rounded-lg px-3 py-1 font-bold transition-colors duration-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Description({ name, balance }) {
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

export default App;
