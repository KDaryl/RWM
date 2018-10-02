/*! Moduloo_First v0.0.0 - MIT license */
'use strict';

var Modulo_First = function (lis) { //Takes a list of integers
  if(lis.length === 0)
    return [];
  if(lis[0] === 0)
    return 0; //Dividng by 0, cant do that!

  var n = lis[0];
  var ans = [];
  for(let val of lis){ans.push(val % n);}

  return ans;
}

if ( typeof module !== "undefined" ) {
  module.exports = Modulo_First;
}
