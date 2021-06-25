import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return " Full-Stack";
  }

  //Make a variable here
  const companyName = "Dumbways.id";

  return (
    <div>
      {/*Include expression in a variable*/}
      <p>
        Welcome To {companyName} Class
        {/*Include expression in a function*/}
        {getMajor()}
      </p>
    </div>
  );
}

export default EmbedExpression;
