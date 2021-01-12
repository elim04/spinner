//spinner2.js

//refactoring spinner1.js to 8-10 lines of code 

let newTime = 0;
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

//second loop around to be like animation
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1900);

//to finish with a line break
setTimeout(() => {
  console.log();
}, 1950);

