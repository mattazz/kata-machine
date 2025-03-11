export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) { // comparison
                const tmp = arr[j]; // create swap temp var
                arr[j] = arr[j + 1]; // moves arr[j+1] into arr[j]
                arr[j + 1] = tmp; // moves arr[j] into arr[j+1]
            }
        }
    }

} 