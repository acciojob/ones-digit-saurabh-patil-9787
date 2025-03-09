function onesDigit(n) {
  // your code here
	let nstring = n.toString();
	return nstring.slice(-1)
}

// Do not change the code below

const n = prompt("Enter Number:");

alert(onesDigit(n));
