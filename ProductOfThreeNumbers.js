/*
You are given one integer number n
. Find three distinct integers a,b,c
 such that 2≤a,b,c
 and a⋅b⋅c=n
 or say that it is impossible to do it.

If there are several answers, you can print any.

You have to answer t
 independent test cases.

Input
The first line of the input contains one integer t
 (1≤t≤100
) — the number of test cases.

The next n
 lines describe test cases. The i
-th test case is given on a new line as one integer n
 (2≤n≤109
).

Output
For each test case, print the answer on it. Print "NO" if it is impossible to represent n
 as a⋅b⋅c
 for some distinct integers a,b,c
 such that 2≤a,b,c
.

Otherwise, print "YES" and any possible such representation.

Example
input
5
64
32
97
2
12345
output
YES
2 4 8 
NO
NO
NO
YES
3 5 823 

*/

var T = parseInt(readline(), 10);
 
for(var t=1; t<=T; t++) {
    var n = parseInt(readline(), 10);
    var ok = false;
    var x=0,y=0,z=0;
    for(var a=2; !ok && a<=Math.sqrt(n); a++) {
        if(n%a != 0) continue;
        for(var b=a+1; !ok && b<=Math.sqrt(n); b++) {
            x = a; y = b; z = n/(a*b);
            if(z <= 1 || z == x || z == y || n%(x*y) != 0) continue;
            ok = true;
        }
    }
    if(ok) {
        print('YES');
        print(x,y,z);
    }
    else print('NO');
}