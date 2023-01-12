/*
Nastia has received an array of n positive integers as a gift.

She calls such an array a good that for all i (2≤i≤n) takes place gcd(ai−1,ai)=1, where gcd(u,v) denotes the greatest common divisor (GCD) of integers u and v.

You can perform the operation: select two different indices i,j (1≤i,j≤n, i≠j) and two integers x,y (1≤x,y≤2⋅109) so that min(ai,aj)=min(x,y). Then change ai to x and aj to y.

The girl asks you to make the array good using at most n operations.

It can be proven that this is always possible.

Input
The first line contains a single integer t (1≤t≤10000) — the number of test cases.

The first line of each test case contains a single integer n (1≤n≤105) — the length of the array.

The second line of each test case contains n integers a1,a2,…,an (1≤ai≤109) — the array which Nastia has received as a gift.

It's guaranteed that the sum of n in one test doesn't exceed 2⋅105.

Output
For each of t test cases print a single integer k (0≤k≤n) — the number of operations. You don't need to minimize this number.

In each of the next k lines print 4 integers i, j, x, y (1≤i≠j≤n, 1≤x,y≤2⋅109) so that min(ai,aj)=min(x,y) — in this manner you replace ai with x and aj with y.

If there are multiple answers, print any.

Example
input
2
5
9 6 3 11 15
3
7 5 13
output
2
1 5 11 9
2 5 7 6
0

*/


var x = readline();
while(x--){
    var n =readline();
    var arr = readline().split(" ").map(Number);
    print(n-1);
    var minval=Math.min.apply(Math, arr);
    var minpos=arr.indexOf(minval);
    
    for(var i=0;i<n;i++){
        if(i==minpos){
            continue;
        }else{
            print(minpos+1,i+1,minval,minval+Math.abs(minpos-i));
        }
    }
}