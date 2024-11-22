import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
    return (
        <div className="flex">
            <CreateUser />

            <UserList />

            <UserDetails id={2} />
        </div>
    );
}

export default App;
