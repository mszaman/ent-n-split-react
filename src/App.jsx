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
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggleAddFriend() {
    setToggleAddFriend((toggleAddFriend) => !toggleAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setToggleAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((sf) => (sf?.id === friend.id ? null : friend));
    setToggleAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
  }

  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="mx-auto w-[340px]">
          <ul className="mb-8 flex flex-col gap-1">
            {friends.map((friend) => (
              // FriendList
              <FriendList
                key={friend.id}
                friend={friend}
                onSelectFriend={handleSelectFriend}
                selectedFriend={selectedFriend}
              />
            ))}
          </ul>

          {/* AddFriendForm */}
          {toggleAddFriend && (
            <AddFriendForm
              name={name}
              setName={setName}
              image={image}
              setImage={setImage}
              onAddFriend={handleAddFriend}
            />
          )}

          <Button className={`float-end`} onClick={handleToggleAddFriend}>
            {toggleAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>

        <div className="mx-auto w-[440px]">
          {/* BillForm */}
          {selectedFriend && (
            <BillForm
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
