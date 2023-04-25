import React from "react";
import AccountContainer from "./AccountContainer";



function App() {

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <p class= "moving-text">Welcome to the Royal Bank of Flatiron</p>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;