/*
Student Valera is an undergraduate student at the University. His end of term exams are approaching and he is to pass exactly n exams. Valera is a smart guy, so he will be able to pass any exam he takes on his first try. Besides, he can take several exams on one day, and in any order.

According to the schedule, a student can take the exam for the i-th subject on the day number ai. However, Valera has made an arrangement with each teacher and the teacher of the i-th subject allowed him to take an exam before the schedule time on day bi (bi < ai). Thus, Valera can take an exam for the i-th subject either on day ai, or on day bi. All the teachers put the record of the exam in the student's record book on the day of the actual exam and write down the date of the mark as number ai.

Valera believes that it would be rather strange if the entries in the record book did not go in the order of non-decreasing date. Therefore Valera asks you to help him. Find the minimum possible value of the day when Valera can take the final exam if he takes exams so that all the records in his record book go in the order of non-decreasing date.

Input
The first line contains a single positive integer n (1 ≤ n ≤ 5000) — the number of exams Valera will take.

Each of the next n lines contains two positive space-separated integers ai and bi (1 ≤ bi < ai ≤ 109) — the date of the exam in the schedule and the early date of passing the i-th exam, correspondingly.

Output
Print a single integer — the minimum possible number of the day when Valera can take the last exam if he takes all the exams so that all the records in his record book go in the order of non-decreasing date.

Examples
inputCopy
3
5 2
3 1
4 2
outputCopy
2
inputCopy
3
6 1
5 2
4 3
outputCopy
6
*/

var n = +readline();
var arr=[];
for(var i=0;i<n;i++)
    arr.push(readline().split(" ").map(v=>+v));
arr.sort((a,b)=>{
    if(a[0]===b[0])
        return a[1]-b[1];
    return a[0]-b[0];
});
 
var prev=0;
for(var i=0;i<n;i++){
    var t=arr[i][1]<prev?0:1;
    prev=arr[i][t];
}
print(prev);