import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { PostContainer } from "./components/PostContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
