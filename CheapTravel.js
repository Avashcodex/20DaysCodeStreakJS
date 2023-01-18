/*
Ann has recently started commuting by subway. We know that a one ride subway ticket costs a rubles. Besides, Ann found out that she can buy a special ticket for m rides (she can buy it several times). It costs b rubles. Ann did the math; she will need to use subway n times. Help Ann, tell her what is the minimum sum of money she will have to spend to make n rides?

Input
The single line contains four space-separated integers n, m, a, b (1 ≤ n, m, a, b ≤ 1000) — the number of rides Ann has planned, the number of rides covered by the m ride ticket, the price of a one ride ticket and the price of an m ride ticket.

Output
Print a single integer — the minimum sum in rubles that Ann will need to spend.

Examples
input
6 2 1 2
output
6
input
5 2 2 3
output
8
*/

var input = readline().split(' '), output,
    n  = input[0], m = input[1], a = input[2], b = input[3];
    if(a <= b/m){
        output = n * a;
    }
    else if(a > b/m){
        if(n % m === 0){
            output = parseInt(n / m) * b;
        }
        else{
            (parseInt(n % m) * a) < b ?
            output = (parseInt(n / m) * b) + (parseInt(n % m) * a) :
            output = parseInt(n / m) * b + parseInt(b);
        }
    }
    print(output);