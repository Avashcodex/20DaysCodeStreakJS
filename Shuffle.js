/*
You are given an array consisting of n
 integers a1
, a2
, ..., an
. Initially ax=1
, all other elements are equal to 0
.

You have to perform m
 operations. During the i
-th operation, you choose two indices c
 and d
 such that li≤c,d≤ri
, and swap ac
 and ad
.

Calculate the number of indices k
 such that it is possible to choose the operations so that ak=1
 in the end.

Input
The first line contains a single integer t
 (1≤t≤100
) — the number of test cases. Then the description of t
 testcases follow.

The first line of each test case contains three integers n
, x
 and m
 (1≤n≤109
; 1≤m≤100
; 1≤x≤n
).

Each of next m
 lines contains the descriptions of the operations; the i
-th line contains two integers li
 and ri
 (1≤li≤ri≤n
).

Output
For each test case print one integer — the number of indices k
 such that it is possible to choose the operations so that ak=1
 in the end.

Example
input
3
6 4 3
1 6
2 3
5 5
4 1 2
2 4
1 2
3 3 2
2 3
1 2
output
6
2
3
*/

var _ite = readline();
while(_ite--){
    var nxm = readline().split(" ").map(Number);
    var minBound = Math.pow(10,9)+2;
    var maxBound = -1;
    var keyindex=nxm[1]-1;
    var condition = true;
    for(var i=0;i<nxm[2];i++){
        var rindex=readline().split(" ").map(Number);
        var inputLowerBound=rindex[0]-1;
        var inputUpperBound=rindex[1]-1;
        if(inputLowerBound<=keyindex && keyindex<=inputUpperBound && condition){
            minBound=inputLowerBound;
            maxBound=inputUpperBound;
            condition=false;
            
        }
        
        if(inputLowerBound<=minBound && inputUpperBound>=minBound){
            minBound=inputLowerBound;
            if(inputUpperBound>maxBound){
                maxBound=inputUpperBound;
            }
        }
        
        if(inputUpperBound>=maxBound && inputLowerBound<=maxBound){
            maxBound=inputUpperBound;
            if(inputLowerBound<minBound){
                minBound=inputLowerBound;
            }
        }
        
        
    }
    
    if(minBound==Math.pow(10,9)+2 || maxBound==-1){
        print(1);
        continue;
    }
    print(maxBound-minBound+1);
}

