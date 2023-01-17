const sentence = "hello there from lighthouse labs";

const slowTimeout = (print, time) => {
  setTimeout(() => {
    process.stdout.write(print);
  }, time);
};

let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  slowTimeout(sentence[i], delay);
  delay += 50;
  if (i === sentence.length - 1) {
    slowTimeout('\n', delay);
  }
}
