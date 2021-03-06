/* REFER TO day_2_data.js TO GET THE INPUT
The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.
The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.
For example:
A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
How many total feet of ribbon should they order?
*/

var min = function(a, b, c) {
  var z; 
  z = a; 
  if (b < z) {
    z = b;
  }
  if (c < z) {
     z = c; 
  }
  return z; 
}

ribbon_bow = function(l, w, h) {
  var a, b, c, ribbon, volume, bow; 
  a = 2 * l + 2 * w; 
  b = 2 * w + 2 * h; 
  c = 2 * h + 2 * l; 
  ribbon = min(a,b,c); 
  bow = l * w * h; 
  return ribbon+bow; 
}

total_ribbon_bow = function(q) {
  var x, sum, i, boxes, each; 
  sum = 0; 
  i = 0; 
  boxes = q.split(" "); 
  while (i < boxes.length) {
    each = boxes[i].split("x"); 
    x = ribbon_bow(each[0], each[1], each [2]); 
    sum = sum + x; 
    i = i + 1; 
  }
  return sum; 
}
