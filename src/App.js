import "./App.css";
import { useState } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import SearchbarComponet from "./Components/SearchbarComponent";
import UserinfoComponent from "./Components/UserInfoComponent";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [userUrl, setUserUrl] = useState("");

  function fetchUser(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json(response))
      .then((data) => handleStateChange(data));
  }

  function handleStateChange(userData) {
    setUserUrl(userData.html_url);
    setBio(userData.bio);
    setName(userData.name);
    setRepos(userData.public_repos);
    setFollowers(userData.followers);
    setFollowing(userData.following);
    setUsername(userData.login);
    setImageUrl(userData.avatar_url);
    setCreatedAt(userData.created_at);
  }

  return (
    <div className="App">
      <div className="header-component-container">
        <HeaderComponent />
      </div>
      <div className="searchBar-component-container">
        <SearchbarComponet fetchUser={fetchUser} />
      </div>
      <div className="cardInfo-component-container">
        <UserinfoComponent
          userHtml={userUrl}
          bio={bio}
          name={name}
          repos={repos}
          followers={followers}
          following={following}
          username={username}
          imageUrl={imageUrl}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
}

export default App;
