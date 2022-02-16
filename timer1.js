// args in this format is an array of strings.
const args = process.argv.slice(2);
//function takes in a time in seconds.
const timer = (times) => {
  // convert provided arguments(seconds) into numbers and convert them into ms.
  const timesInMs = args.map(time => Number(time) * 1000);
  for (const num of timesInMs) {
    // only proceed if a number type that is above zero is being given.
    if (typeof num === "number" && num >= 0) {
      setTimeout(() => {
        // beep sound didn't register on my machine. substitute "beep".
        console.log('beep');
      }, (num));
    }
  }
};

timer(args);

