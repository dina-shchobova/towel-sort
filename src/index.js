
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let new_arr = [];

    if (matrix !== undefined && matrix.length !== 0) {

        for (let i = 0; i < matrix.length; i++) {

            if (i % 2 === 0) {

                matrix[i].sort(function (a, b) {

                    return a - b;

                });

            } else {

                matrix[i].sort(function (a, b) {

                    return b - a;

                });

            }

        }

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {

                new_arr.push(matrix[i][j]);

            }

        }

    }

    return new_arr;

}
