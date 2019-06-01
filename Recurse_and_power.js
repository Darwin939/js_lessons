"use strict";
function power(val, pow)
{
  if (pow!=1)
  {return val*power(val,pow-1)}
  else {
    return val
  }
}
print(power(2,3 ))
