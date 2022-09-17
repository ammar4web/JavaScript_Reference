fetch("http://127.0.0.1:3000/user")
  .then((Response) => Response.json())
  .then((users) => console.log(users))
  .catch((error) => console.log("Error: ", error));
