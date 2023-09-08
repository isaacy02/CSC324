// Isaac Young
// Chapter 3

//Minimum
function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  console.log(min(0, 10));
  console.log(min(0, -10));

  //recursion
  function ifEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return ifEven(-n);
    else return ifEven(n - 2);
  }
  
  console.log(ifEven(50));
  console.log(ifEven(75));
  console.log(ifEven(-1));


  //Bean counting
  function count(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function count2(string) {
    return count(string, "B");
  }
  
  console.log(count2("BBC"));
  console.log(count("kakkerlak", "k"));

  //Used the book to help me as I got stuck and needed it.