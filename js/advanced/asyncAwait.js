const wait = (time) =>
  new Promise((resolve, reject) => {
    if (time > 5000) reject("Sorry I can't wait more than 5 second.");
    setTimeout(resolve, time);
  });

// wait(4000)
//   .then(() => {
//     console.log("Hello!");
//     // return
//     return wait(2000);
//   })
//   .then(() => console.log("World"));

async function doWork() {
  await wait(4000);
  console.log("Hello");
  await wait(2000);
  console.log("World!");
  await wait(2000);
  console.log("async, await");
}

async function doWork2() {
  try {
    await wait(4000);
    console.log("Hello");
    await wait(6000);
    console.log("World!");
    await wait(2000);
    console.log("async, await");
  } catch (err) {
    console.log(err);
  }
}

doWork();
doWork2();
console.log("End");
