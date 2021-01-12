//spinner.js

//example of how to use \r to bring cursor back to beginning
// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

let timeDelay = 100;

for (let sym of characters) {
  setTimeout(() => {
    process.stdout.write(sym);
  }, timeDelay);
  timeDelay += 200;
}



