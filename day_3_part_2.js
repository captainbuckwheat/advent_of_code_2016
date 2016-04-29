/* REFER TO day_3_data.js TO GET THE INPUT 

The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

This year, how many houses receive at least one present?

For example:

^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.
*/

var houses_together = function(q) {
  var a, i, x, y, start; 
  a = {}; 
  a["0, 0"] = 1; 
  start = 0; 
  while (start < 2) {
    x = 0; 
    y = 0; 
    i = start; 
    while (i < q.length) {
      if (q[i] === "^") {
        y = y + 1; 
      } else if (q[i] === "v") {
        y = y - 1; 
      } else if (q[i] === ">") {
        x = x + 1; 
      } else if (q[i] === "<") {
        x = x - 1; 
      }
      a[x + ", " + y] = 1; 
      i+= 2; 
    }
    start = start + 1; 
  }
  return Object.keys(a).length; 
}
