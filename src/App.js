import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import SearchbarComponet from "./Components/SearchbarComponent";
import UserinfoComponent from "./Components/UserInfoComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchbarComponet />
      <UserinfoComponent />
    </div>
  );
}

export default App;
