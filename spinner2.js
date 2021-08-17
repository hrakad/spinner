const array = ['\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\  ','\r|  '];
let delay = 400;
array.forEach(val => {
  setTimeout(() => {
    process.stdout.write(val)
  }, delay)
  delay = delay + 400
});
  
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, delay)

  