/*
Kirito is stuck on a level of the MMORPG he is playing now. To move on in the game, he's got to defeat all n dragons that live on this level. Kirito and the dragons have strength, which is represented by an integer. In the duel between two opponents the duel's outcome is determined by their strength. Initially, Kirito's strength equals s.

If Kirito starts duelling with the i-th (1 ≤ i ≤ n) dragon and Kirito's strength is not greater than the dragon's strength xi, then Kirito loses the duel and dies. But if Kirito's strength is greater than the dragon's strength, then he defeats the dragon and gets a bonus strength increase by yi.

Kirito can fight the dragons in any order. Determine whether he can move on to the next level of the game, that is, defeat all dragons without a single loss.

Input
The first line contains two space-separated integers s and n (1 ≤ s ≤ 104, 1 ≤ n ≤ 103). Then n lines follow: the i-th line contains space-separated integers xi and yi (1 ≤ xi ≤ 104, 0 ≤ yi ≤ 104) — the i-th dragon's strength and the bonus for defeating it.

Output
On a single line print "YES" (without the quotes), if Kirito can move on to the next level and print "NO" (without the quotes), if he can't.

Examples
inputCopy
2 2
1 99
100 0
outputCopy
YES
inputCopy
10 1
100 100
outputCopy
NO
*/

var input1 = readline().split(' ').map(Number);
var s = input1[0];
var n = input1[1];
var d = [];
 
while(n--) {
   d.push(readline().split(' ').map(Number));
}
 
d.sort((x, y) => x[0] - y[0]);
 
for(var i = 0; i < d.length; i++) {
    if(s <= d[i][0]) {
        break;
    }
    s += d[i][1];
}
print(i === d.length ? 'YES' : 'NO');