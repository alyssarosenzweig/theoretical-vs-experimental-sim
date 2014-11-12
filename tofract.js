function getGCD(numerator, denominator) {
	return denominator ? getGCD(denominator, numerator % denominator) : Math.abs(numerator);
}

function toFrac(decimal) {
	var precision = 3;
	var cut = decimal.toString().slice(0, 2 + precision) * 1;

	console.log(cut);

	var digits = cut.toString().length - 2;

	console.log(digits);

	var denominator = Math.pow(10, digits);
	var numerator = cut * denominator;

	while( (gcd = getGCD(numerator, denominator)) > 1) {
		numerator /= gcd;
		denominator /= gcd;
	}

	return [numerator, denominator];
}