import React from "react";

const Post = React.memo(({ value }) => {
  return (
    <div>
      <h1>
        My name is {value.name} and I am {value.age} years old
      </h1>
    </div>
  );
});

export default Post;
