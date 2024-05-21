#!/usr/bin/node

// Fibonaci sequence

// Using iteration
function fibs(x) {
    let fibSeq = [0, 1]

    if (x === 1) {
        return [fibSeq[0]]
    } else if (x === 0) {
        return []
    }

    for (let i = 2; i < x; i++) {
        let fibNum = fibSeq[i - 1] + fibSeq[i - 2]
        fibSeq.push(fibNum)
    }

    return fibSeq
}

// console.log(fibs(2))

// Using recursion
function fibsRec(x) {
    if (x === 0 || x === 1) {
        return 0
    } else if (x === 2) {
        return 1
    } else {
        // nth fib num
        let fibNum = fibsRec(x - 1) + fibsRec(x - 2)

        return fibNum
    }
}

console.log(fibsRec(5))
