/*
For the given integer n
 (n>2
) let's write down all the strings of length n
 which contain n−2
 letters 'a' and two letters 'b' in lexicographical (alphabetical) order.

Recall that the string s
 of length n
 is lexicographically less than string t
 of length n
, if there exists such i
 (1≤i≤n
), that si<ti
, and for any j
 (1≤j<i
) sj=tj
. The lexicographic comparison of strings is implemented by the operator < in modern programming languages.

For example, if n=5
 the strings are (the order does matter):

aaabb
aabab
aabba
abaab
ababa
abbaa
baaab
baaba
babaa
bbaaa
It is easy to show that such a list of strings will contain exactly n⋅(n−1)2
 strings.

You are given n
 (n>2
) and k
 (1≤k≤n⋅(n−1)2
). Print the k
-th string from the list.

Input
The input contains one or more test cases.

The first line contains one integer t
 (1≤t≤104
) — the number of test cases in the test. Then t
 test cases follow.

Each test case is written on the the separate line containing two integers n
 and k
 (3≤n≤105,1≤k≤min(2⋅109,n⋅(n−1)2)
.

The sum of values n
 over all test cases in the test doesn't exceed 105
.

Output
For each test case print the k
-th string from the list of all described above strings of length n
. Strings in the list are sorted lexicographically (alphabetically).

Example
input
7
5 1
5 2
5 8
5 10
3 1
3 2
20 100
output
aaabb
aabab
baaba
bbaaa
abb
bab
aaaaabaaaaabaaaaaaaa
*/

var ite = readline();
while(ite--){
    var nk= readline().split(" ").map(Number);
    var ans = Array(nk[0]).fill('a');
    var ver = (-1+Math.sqrt(1+8*nk[1]))/2;
    var ver = Math.floor(ver);
    var sumvar=(ver*ver+ver)/2;
    var x=nk[1]-sumvar;
    if(x==0){
        var b1posi=ver+1;
        var b2posi=b1posi-1;
    }else{
        b2posi=x;
        b1posi=ver+2;
    }
    
    ans[nk[0]-Math.floor(b1posi)]="b";
    ans[nk[0]-Math.floor(b2posi)]="b";
    
    var st = ans.join("");
    print(st);
}