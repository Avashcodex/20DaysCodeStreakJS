/*
A string a=a1a2…an is called even if it consists of a concatenation (joining) of strings of length 2 consisting of the same characters. In other words, a string a is even if two conditions are satisfied at the same time:

its length n is even;
for all odd i (1≤i≤n−1), ai=ai+1 is satisfied.
For example, the following strings are even: "" (empty string), "tt", "aabb", "oooo", and "ttrrrroouuuuuuuukk". The following strings are not even: "aaa", "abab" and "abba".

Given a string s consisting of lowercase Latin letters. Find the minimum number of characters to remove from the string s to make it even. The deleted characters do not have to be consecutive.

Input
The first line of input data contains an integer t (1≤t≤104) —the number of test cases in the test.

The descriptions of the test cases follow.

Each test case consists of one string s (1≤|s|≤2⋅105), where |s| — the length of the string s. The string consists of lowercase Latin letters.

It is guaranteed that the sum of |s| on all test cases does not exceed 2⋅105.

Output
For each test case, print a single number — the minimum number of characters that must be removed to make s even.

Example
input
6
aabbdabdccc
zyx
aaababbb
aabbcc
oaoaaaoo
bmefbmuyw
output
3
3
2
0
2
7
*/

var n = readline();
while(n--){
    var x = readline();
    var prev =""
    var val = x.length;
    for (var i=0;i<x.length;i++){
        if (prev.includes(x[i])){
            val-=2;
            prev="";
        }else{
            prev = prev.concat(x[i]);
        }
    }
    print(val);
}