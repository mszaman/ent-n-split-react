import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import BillForm from "./components/BillFrom";
import FriendList from "./components/FriendList";
import Button from "./components/atoms/Button";

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

  const [toggleAddFriend, setToggleAddFriend] = useState(false);
  const [name, setName] = useState("");

  console.log(toggleAddFriend);
  function handleToggleAddFriend() {
    setToggleAddFriend((toggleAddFriend) => !toggleAddFriend);
  }

  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="mx-auto w-[340px]">
          <ul className="mb-8 flex flex-col gap-1">
            {initialFriends.map((f) => (
              // FriendList
              <FriendList key={f.id} {...f} />
            ))}
          </ul>
          {/* AddFriendForm */}
          {toggleAddFriend && <AddFriendForm />}
          <Button className={`float-end`} onClick={handleToggleAddFriend}>
            {toggleAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        <div className="mx-auto w-[440px]">
          {/* BillForm */}
          <BillForm />
        </div>
      </div>
    </>
  );
}

export default App;
