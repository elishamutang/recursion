export default function mergeSort(arr) {
    let start = 0
    let end = arr.length - 1

    if (start < end) {
        let mid = Math.floor(end / 2)

        let leftArr = arr.slice(start, mid + 1)
        let rightArr = arr.slice(mid + 1)

        mergeSort(leftArr)
        mergeSort(rightArr)
        merge(leftArr, rightArr)

        return arr
    }

    function merge(leftArr, rightArr) {
        let k = 0,
            i = 0,
            j = 0

        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                arr[k] = leftArr[i]
                k++
                i++
            } else {
                arr[k] = rightArr[j]
                k++
                j++
            }
        }

        while (i < leftArr.length) {
            arr[k] = leftArr[i]
            k++
            i++
        }

        while (j < rightArr.length) {
            arr[k] = rightArr[j]
            k++
            j++
        }
    }
}

const arrOne = [3, 2, 1, 13, 8, 5, 0, 1]
const arrTwo = [105, 79, 100, 110]
const arrThree = [8, 9, 12, 11, 42, 59, 56, 22, 34, 69]

// console.log(mergeSort(arrOne))
// console.log(mergeSort(arrTwo))
// console.log(mergeSort(arrThree))

const randomArr = () => {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
}

console.log(mergeSort(randomArr()))
