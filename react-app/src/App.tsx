import ListGroup from "./components/ListGroup";
import Student from "./components/Student";
import UserGreetings from "./components/UserGreeting";
function App() {
  return (
    <div>
      {/* <Student name="Abhiram" age={30} isStudent={true} /> */}
      <UserGreetings isLoggedIn={true} username="Abhi" />
    </div>
  );
}

export default App;
