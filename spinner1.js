// process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|  ');  
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');  
}, 500);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 1300);

setTimeout(() => {
    process.stdout.write('\r|  ');  
  }, 1700);

  setTimeout(() => {
    process.stdout.write('\r/  ');  
  }, 2100);

  setTimeout(() => {
    process.stdout.write('\r-  ');
  }, 2500);

  setTimeout(() => {
    process.stdout.write('\r|  ');  
  }, 2900);

