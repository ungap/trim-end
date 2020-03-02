var trimEnd = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
delete String.prototype.trimEnd;
var trimEnd = require('../cjs');
test();

function test() {
  console.assert(
    trimEnd.call(' test \f\n\r\t\uFEFF\xA0 ') === ' test',
    'works as expected'
  );
}
