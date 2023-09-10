var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("--a:1 (a=2,   2-1 = 1) </br>");
document.write("--a  -    --b: 1 (b=1,    1-1=0)</br>");
document.write("--a  -    --b + ++b: 2 (b=0,    1+1=2)</br>");
document.write("--a  -    --b + ++b + b--: 3 (b=1,    2+1=3)</br>");
