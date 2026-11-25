const assert = require('assert');
const { add } = require('./math');

// Kiểm tra: 2 + 3 phải bằng 5
assert.strictEqual(add(2, 3), 5, 'Lỗi: 2 + 3 phải bằng 5!');
console.log('Tất cả bài test đều PASS!');