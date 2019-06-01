

function abrakadabra(x,y)
{if (x>0 && y>0)
{
alert("числа положительные поэтому вывожу разность "+(y-x))}
else if (x<0 && y<0 )
{
alert("Числа отрицательные поэтому вывожу их произведение "+(x+y))}
else
{var g = 0
g = (Math.abs(x)+Math.abs(y))
alert("числа разные "+g); }
}


function mathOperation(arg1,arg2,operation)
{if (operation =="+")
  {abrakadabra(arg1,arg2)}
else if (operation=='-')
{abrakadabra(arg1,arg2)}
else 
{abrakadabra(arg1,arg2)}
}
mathOperation(10,30,'+')
