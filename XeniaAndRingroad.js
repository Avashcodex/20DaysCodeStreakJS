/*
Xenia lives in a city that has n houses built along the main ringroad. The ringroad houses are numbered 1 through n in the clockwise order. The ringroad traffic is one way and also is clockwise.

Xenia has recently moved into the ringroad house number 1. As a result, she's got m things to do. In order to complete the i-th task, she needs to be in the house number ai and complete all tasks with numbers less than i. Initially, Xenia is in the house number 1, find the minimum time she needs to complete all her tasks if moving from a house to a neighboring one along the ringroad takes one unit of time.

Input
The first line contains two integers n and m (2 ≤ n ≤ 105, 1 ≤ m ≤ 105). The second line contains m integers a1, a2, ..., am (1 ≤ ai ≤ n). Note that Xenia can have multiple consecutive tasks in one house.

Output
Print a single integer — the time Xenia needs to complete all tasks.

Please, do not use the %lld specifier to read or write 64-bit integers in С++. It is preferred to use the cin, cout streams or the %I64d specifier.

Examples
input
4 3
3 2 3
output
6
input
4 3
2 3 3
output
2
*/

X=readline().split(' ').map(Number)
n=X[0], m=X[1]
A=readline().split(' ').map(Number)
r=A.reduce((a,c) => {
	if (c >= a.now) {
		a.sum += c - a.now;
	} else {
		a.sum += n - a.now + c;
	}
	a.now = c;
	return a;
}, { now: 1, sum: 0 });
print(r.sum)