import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <div>
      <h1>Welcome</h1>
      {/* Parsing using Props */}
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  return (
    <div>
      <h1>Please Sign</h1>
      {/* Parsing using Props */}
      <button onClick={props.login}>Login</button>
    </div>
  );
}

function ConditionRenderin() {
  //init State
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div>
      {/* conditional logic rendering */}
      {isLoggedin ? (
        <PrivatePage logout={() => setIsLoggedin(!isLoggedin)} />
      ) : (
        <GuestPage login={() => setIsLoggedin(!isLoggedin)} />
      )}
    </div>
  );
}

export default ConditionRenderin;