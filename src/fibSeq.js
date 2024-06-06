#!/usr/bin/node

// Fibonaci sequence

// Using iteration
function fibs(x) {
    let fibSeq = [0, 1]

    if (x === 1) {
        return [0]
    } else if (x === 0) {
        return []
    }

    for (let i = 2; i < x; i++) {
        let fibNum = fibSeq[i - 1] + fibSeq[i - 2]
        fibSeq.push(fibNum)
    }

    return fibSeq
}

console.log(fibs(8))

// Using recursion
function fibsRec(x) {
    if (x === 1) {
        return [0]
    } else if (x === 2) {
        return [0, 1]
    } else {
        let fibNum = fibsRec(x - 1)

        fibNum.push(fibNum[x - 2] + fibNum[x - 3])
        return fibNum
    }
}

console.log(fibsRec(8))
