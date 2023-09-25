const fn1 = () => {
  console.log("fn1");
};

const fn2 = () => {
  fn1();
  console.log("fn2");
};

const fn3 = () => {
  fn2();
  console.log("fn3");
};

fn3();
