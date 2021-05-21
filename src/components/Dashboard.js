import React, { useState } from "react";
import UserCard from "./UserCard";
import Repos from "./Repos";
import Header from "./Header";
import FavRepo from "./FavRepo";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header setUser={setUser} />
      <div style={{ marginTop: "10vh" }}>
        {user ? (
          <>
            <UserCard user={user} />
            <Repos user={user} />
          </>
        ) : (
          <FavRepo />
        )}
      </div>
    </>
  );
}
