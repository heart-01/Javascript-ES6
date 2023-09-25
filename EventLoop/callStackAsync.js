const fn1 = () => {
  console.log("fn1 sync");
  setTimeout(() => {
    console.log("fn1");
  }, 1000);
};

const fn2 = () => {
  console.log("fn2 sync");
  fn1();
  setTimeout(() => {
    console.log("fn2");
  }, 1000);
};

const fn3 = () => {
  console.log("fn3 sync");
  fn2();
  setTimeout(() => {
    console.log("fn3");
  }, 1000);
};

fn3();