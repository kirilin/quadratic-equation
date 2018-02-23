module.exports = function solveEquation(equation) {
  let discriminant;
  let xVal = [];
  let aVal, bVal, cVal;
  let abcValue = equation.split(' ');
  
  aVal = +abcValue[0];
  bVal = +abcValue[4];
  cVal = +abcValue[8];
  
  if(abcValue[3] === '-') {
    bVal = -bVal;
  }
  if(abcValue[7] === '-') {
    cVal = -cVal;
  }
  
  discriminant = Math.pow(bVal,2) - 4 * aVal * cVal;
  
  if(discriminant > 0) {
    xVal[0] = (-bVal - Math.round(Math.sqrt(discriminant))) / (2 * aVal);
    xVal[1] = (-bVal + Math.round(Math.sqrt(discriminant))) / (2 * aVal);
  } else if (discriminant === 0) {
    xVal[0] = xVal[1] = - bVal / 2 * aVal;
  } else {
    return NaN;
  }
  return xVal.sort((a,b) => a-b);
}
