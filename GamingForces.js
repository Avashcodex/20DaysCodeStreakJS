/*
Monocarp is playing a computer game. He's going to kill n
 monsters, the i
-th of them has hi
 health.

Monocarp's character has two spells, either of which he can cast an arbitrary number of times (possibly, zero) and in an arbitrary order:

choose exactly two alive monsters and decrease their health by 1
;
choose a single monster and kill it.
When a monster's health becomes 0
, it dies.

What's the minimum number of spell casts Monocarp should perform in order to kill all monsters?

Input
The first line contains a single integer t
 (1≤t≤104
) — the number of testcases.

The first line of each testcase contains a single integer n
 (1≤n≤100
) — the number of monsters.

The second line contains n
 integers h1,h2,…,hn
 (1≤hi≤100
) — the health of each monster.

The sum of n
 over all testcases doesn't exceed 2⋅104
.

Output
For each testcase, print a single integer — the minimum number of spell casts Monocarp should perform in order to kill all monsters.

Example
input
3
4
1 2 1 2
3
2 4 2
5
1 2 3 4 5
output
3
3
5
*/

var ite = readline();
while(ite--){
    var n=readline();
    var ar=readline().split(" ").map(Number);
    var cone = 0;
    for(var i =0;i<n;i++){
        if (ar[i]==1){
            cone+=1;
        }
    }
    var sp1= Math.floor(cone/2)+(cone%2);
    var sp2=n-cone;
    print(sp1+sp2);
    
}