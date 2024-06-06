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

// const randomArr = () => {
//     return Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
// }

// console.log(mergeSort(randomArr()))
