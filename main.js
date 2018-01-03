function calculate (bowls) {
    var total = 0;
    var frame = 0;

    for (var i = 0; i < bowls.length && frame < 10;) {
        var current = bowls[i];

        if (current === 10) {
            // strike
            total += (10 + bowls[i+1] + bowls[i+2])
            i++;
        } else if ((current + bowls[i+1]) === 10) {
            // Spare
            total += (current + bowls[i+1] + bowls[i+2]);
            i += 2;
        } else {
            total += current + bowls[i+1];
            i += 2;
        }

        frame += 1;
    }

    return total;
}

exports.testFinalSpareAfterGutter = function (test) {
    var bowls = Array(18).fill(0);
    bowls = bowls.concat([5, 5, 10]);

    test.expect(1);
    test.equal(calculate(bowls), 20);
    test.done();
}

exports.testFinalSpareAfterStrikes = function (test) {
    var bowls = Array(9).fill(10);
    bowls = bowls.concat([5, 5, 10]);

    test.expect(1);
    test.equal(calculate(bowls), 275);
    test.done();
}

exports.testPerfectGame = function (test) {
    var bowls = Array(12).fill(10);

    test.expect(1);
    test.equal(calculate(bowls), 300);
    test.done();
}

exports.testSpare = function (test) {
    var bowls = [
        5,5,6,3
    ];

    test.expect(1);
    test.equal(calculate(bowls), 25);
    test.done();
}

exports.testStrike = function (test) {

    var bowls = [
        10, 2, 1
    ];

    test.expect(1);
    test.equal(calculate(bowls), 16);
    test.done();
}


exports.testCalculate = function (test) {

    var bowls = [
        3, 5, 2, 4
    ];

    test.expect(1);
    test.equal(calculate(bowls), 14);
    test.done();
}