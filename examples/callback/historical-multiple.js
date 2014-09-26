var util = require('util');

require('colors');

var _ = require('lodash');
var yahooFinance = require('../..');

var SYMBOLS = [
  'AAPL',
  'AMZN',
  'GOOGL',
  'YHOO'
];

yahooFinance.historical({
  symbols: SYMBOLS,
  from: '2012-01-01',
  to: '2012-12-31',
  period: 'd'
}, function (err, result) {
  if (err) { throw err; }
  _.each(result, function (quotes, symbol) {
    console.log(util.format(
      '=== %s (%d) ===',
      symbol,
      quotes.length
    ).cyan);
    console.log(
      '%s\n...\n%s',
      JSON.stringify(quotes[0], null, 2),
      JSON.stringify(quotes[quotes.length - 1], null, 2)
    );
  });
});