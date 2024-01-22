import { useState } from "react";
import Button from "./atoms/Button";
import FormGroup from "./atoms/FormGroup";

export default function BillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill && paidByUser ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  }

  return (
    <form
      className="mb-4 flex flex-col justify-center gap-4 rounded-lg bg-orange-lighest px-10 py-8"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-2 text-2xl font-bold uppercase">
        split a bill with {selectedFriend.name}
      </h2>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>💰 Bill value</label>
        <input
          className={`w-1/3 rounded-md border border-orange-light py-1 text-center`}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </FormGroup>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>🕴️ Your expense</label>
        <input
          className={`w-1/3 rounded-md border border-orange-light py-1 text-center`}
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value),
            )
          }
        />
      </FormGroup>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>
          🧑‍🤝‍🧑 {selectedFriend.name}'s expense
        </label>
        <input
          className={`w-1/3 rounded-md border border-orange-light py-1 text-center`}
          value={paidByFriend}
          disabled
        />
      </FormGroup>
      <FormGroup>
        <label className={`w-2/3 font-bold`}>🤑 Who is paying the bill</label>
        <select
          className=" w-1/3 rounded-md border border-orange-light py-[6px]"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </FormGroup>
      <Button className="self-end">Split Bill</Button>
    </form>
  );
}
