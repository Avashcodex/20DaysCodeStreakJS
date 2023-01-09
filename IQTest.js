/*

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given n numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given n numbers finds one that is different in evenness.

Input
The first line contains integer n (3 ≤ n ≤ 100) — amount of numbers in the task. The second line contains n space-separated natural numbers, not exceeding 100. It is guaranteed, that exactly one of these numbers differs from the others in evenness.

Output
Output index of number that differs from the others in evenness. Numbers are numbered from 1 in the input order.

Examples
inputCopy
5
2 4 7 8 10
outputCopy
3
inputCopy
4
1 2 1 1
outputCopy
2

*/

var n = parseInt(readline());
var e_count=0, o_count=0;
var odd, even, ans;
var arr = readline().split(" ").map(x => parseInt(x));
 
for (var i=0; i<n; i++){
    if(arr[i]%2 == 0 ){
        e_count = e_count + 1;
        var even = i; 
    }
    else{
        o_count = o_count + 1;
        var odd = i;
    }
    if(e_count >1 && odd>=0){
        ans = odd+1;
        break;
    }
    if(o_count >1 && even>=0){
        ans = even+1;
        break;
    }
}
 
print(ans);