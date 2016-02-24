'use strict';
/*
These values can be replaced with anything. I am also currently only
calculating 2 places being paid which is sufficient for the tournament
structure which I am emulating, Merge 6Max Hyper Turbo $3.50 buyin.

Note that I am using the 'old' MH algorithm rather than the new
Ben Roberts algo
*/
const FIRST_PLACE_PRIZE = 12.76;
const SECOND_PLACE_PRIZE = 6.86;
const CHIP_TOTAL = 1800;
const STACKS = [1100, 500, 100, 100];

// calculate probability of coming in first
const p1st = STACKS.map(function (stack) {
	return stack / CHIP_TOTAL;
});

// calculate probabilities of coming in second
const p2nd = STACKS.map(function (stack, i) {
	// probability index i comes in 2nd
	return STACKS.reduce(function (prev, current, j) {
		if (i === j) {
			return prev;
		}
		const sum = p1st[j] * stack / (CHIP_TOTAL - current);
		return prev + sum;
	}, 0);
});

//calculate expected values
let evs = [];
for (var i = 0; i < STACKS.length; i++) {
	var expectedVal1st = FIRST_PLACE_PRIZE * p1st[i];
	var expectedVal2nd = SECOND_PLACE_PRIZE * p2nd[i];
	evs.push((expectedVal1st + expectedVal2nd).toPrecision(
		FIRST_PLACE_PRIZE.toString().length
	));
}

console.log(evs); // [ '9.9034', '6.7631', '1.4768', '1.4768' ]