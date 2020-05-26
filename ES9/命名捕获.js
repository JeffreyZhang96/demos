let date = '2020-04-28';

let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

console.log(date.match(reg));

let reg2 = /^(?<Strive>welcome)-\k<Strive>$/;

console.log(reg2.test('a-b'));
console.log(reg2.test('Strive-Strive'));
console.log(reg2.test('welcome-welcome'));
