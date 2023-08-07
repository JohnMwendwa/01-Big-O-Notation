function CountUpAndDown(n) {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\n Going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back Down!. Bye");
}

CountUpAndDown(10);
