/*
You have a new professor of graph theory and he speaks very quickly. You come up with the following plan to keep up with his lecture and make notes.

You know two languages, and the professor is giving the lecture in the first one. The words in both languages consist of lowercase English characters, each language consists of several words. For each language, all words are distinct, i.e. they are spelled differently. Moreover, the words of these languages have a one-to-one correspondence, that is, for each word in each language, there exists exactly one word in the other language having has the same meaning.

You can write down every word the professor says in either the first language or the second language. Of course, during the lecture you write down each word in the language in which the word is shorter. In case of equal lengths of the corresponding words you prefer the word of the first language.

You are given the text of the lecture the professor is going to read. Find out how the lecture will be recorded in your notes.

Input
The first line contains two integers, n and m (1 ≤ n ≤ 3000, 1 ≤ m ≤ 3000) — the number of words in the professor's lecture and the number of words in each of these languages.

The following m lines contain the words. The i-th line contains two strings ai, bi meaning that the word ai belongs to the first language, the word bi belongs to the second language, and these two words have the same meaning. It is guaranteed that no word occurs in both languages, and each word occurs in its language exactly once.

The next line contains n space-separated strings c1, c2, ..., cn — the text of the lecture. It is guaranteed that each of the strings ci belongs to the set of strings {a1, a2, ... am}.

All the strings in the input are non-empty, each consisting of no more than 10 lowercase English letters.

Output
Output exactly n words: how you will record the lecture in your notebook. Output the words of the lecture in the same order as in the input.

Examples

input
4 3
codeforces codesecrof
contest round
letter message
codeforces contest letter contest
output
codeforces round letter round

input
5 3
joll wuqrd
euzf un
hbnyiyc rsoqqveh
hbnyiyc joll joll euzf joll
output
hbnyiyc joll joll un joll
*/

var t = readline().split(' ');
var n = t[0];
var m = t[1];
var i = 0, inpStr1, slo1 = [], slo2 = [];
 
for(i=0; i<m; i++)
{
  inpStr1 = readline().split(' ');
 
  slo1[i] = inpStr1[0];
  slo2[i] = inpStr1[1];
}
 
var inpStr2 = readline().split(' '), outStr = "";
 
for(i=0; i<n; i++)
{
  for(var k=0; k<m; k++)
  {
    if (inpStr2[i] == slo1[k] && slo1[k].length > slo2[k].length) 
    {
      outStr = outStr + slo2[k];
    }
    else if (inpStr2[i] == slo1[k]) 
    {
      outStr = outStr + slo1[k];
    }
  }
  if (i<n) outStr = outStr + " ";
}
 
print(outStr);