let webSkiles = [
  ["HTML", "CSS", "JavaScript"],
  ["PHP", "Laravel", "MySQL"],
];

if (webSkiles.length == 2) {
  console.log("These skiles is for a full-stack developer.");
} else {
  console.log("These skiles is not for a full stack developer.");
}

webSkiles.length == 1
  ? console.log("These skiles is for just a front-end or back-end developer.")
  : console.log("These skiles is not for just a front-end or back-end developer.");
