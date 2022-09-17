const wait = (time) =>
  new Promise((resolve, reject) => {
    if (time > 5000) reject("Sorry I can't wait more than 5 second.");
    setTimeout(resolve, time);
  });

wait(4000)
  .then(() => console.log("Hello!"))
  .catch((err) => console.log(err));

wait(6000)
  .then(() => console.log("Hello!"))
  .catch((err) => console.log(err));

wait(4000)
  .then(() => console.log("Hello!"))
  .catch((err) => console.log(err));
