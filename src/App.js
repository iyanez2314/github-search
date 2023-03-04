import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import SearchbarComponet from "./Components/SearchbarComponent";
import UserinfoComponent from "./Components/UserInfoComponent";

function App() {
  return (
    <div className="App">
      <div className="header-component-container">
        <HeaderComponent />
      </div>
      <div className="searchBar-component-container">
        <SearchbarComponet />
      </div>
      <div className="cardInfo-component-container">
        <UserinfoComponent />
      </div>
    </div>
  );
}

export default App;
