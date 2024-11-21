import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Buttons from "./Buttons";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 px-4 py-3 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Buttons to="/menu" type="primary">
          Continue to Menu, {username}
        </Buttons>
      )}
    </div>
  );
}

export default Home;