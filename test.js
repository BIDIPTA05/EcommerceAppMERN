function test() {
  let a = 5;
  if (true) {
    let a = 10;
    console.log(a);
     a = 15;
    console.log(a)
  }
  console.log(a)
}


test();