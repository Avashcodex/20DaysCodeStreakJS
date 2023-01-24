/*
A permutation of length n
 is an array consisting of n
 distinct integers from 1
 to n
 in arbitrary order. For example, [2,3,1,5,4]
 is a permutation, but [1,2,2]
 is not a permutation (2
 appears twice in the array), and [1,3,4]
 is also not a permutation (n=3
 but there is 4
 in the array). There are n!=n⋅(n−1)⋅(n−2)⋅…⋅1
 different permutations of length n
.

Given a permutation p
 of n
 numbers, we create an array a
 consisting of 2n
 numbers, which is equal to p
 concatenated with its reverse. We then define the beauty of p
 as the number of inversions in a
.

The number of inversions in the array a
 is the number of pairs of indices i
, j
 such that i<j
 and ai>aj
.

For example, for permutation p=[1,2]
, a
 would be [1,2,2,1]
. The inversions in a
 are (2,4)
 and (3,4)
 (assuming 1-based indexing). Hence, the beauty of p
 is 2
.

Your task is to find the sum of beauties of all n!
 permutations of size n
. Print the remainder we get when dividing this value by 1000000007
 (109+7
).

Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤105
). The description of the test cases follows.

Each test case has only one line — the integer n
 (1≤n≤105
).

It is guaranteed that the sum of n
 over all test cases does not exceed 105
.

Output
For each test case, print one integer — the sum of beauties of all permutations of size n
 modulo 1000000007
 (109+7
).

Example
input
3
1
2
100
output
0
4
389456655
*/

var n=parseInt(readline().split(" ")[0])
var mod=1000000007
function solve(m){
    var ans=(m-1)*m
    var i=1
    while(i!=m+1){
        ans=((ans%mod)*i)%mod
        i++
    }
    return ans
}
for(var i=0;i<n;i++){
 
    var a=parseInt(readline().split(" ")[0])
    print(solve(a))
}