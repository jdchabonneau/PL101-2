var PEG = require('pegjs');
var assert = require('assert');
var fs = require('fs'); // for loading files

console.log(8888);
fs.readFile('my.peg', 'ascii', function (err, data) {
    // Show the PEG grammar file
    console.log(data);
    // Create my parser
    var parse = PEG.buildParser(data).parse;
    console.log(99  );
    // Do a test
    assert.deepEqual(parse("()"), []);
    assert.deepEqual(parse("abc"), "abc");
    assert.deepEqual(parse("'(+ (a b c) 8)"), ["quote", ["+", ["a", "b", "c"], "8"]]);
    assert.deepEqual(parse("(+ (a b c) 8)"), ["+", ["a", "b", "c"], "8"]);
    assert.deepEqual(parse(" (+ ( a  b  c  )  9 )  "), ["+", ["a", "b", "c"], "9"]);
//    assert.deepEqual(parse("'c"), ["quote", "c"]);
  //  assert.deepEqual(parse("'(a b c)"), ["quote", ["a", "b", "c"]]);
});

//Ch. Dq Eh. Cq Eh Ch Eh Rh  Dh. Eq Fq Fq Eq Dq Fw. Rh  
//Eh. Fq Gh. Eq Gh Eh Gh Rh  Fh. Gq Aq Aq Gq Fq Aw. Rh
//G C D E F G A  A D E F G A B  B C E F G A B C'  B A G F E D C D E F G A B 1C G 1C