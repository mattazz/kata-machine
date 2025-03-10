export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; // lowest of array
    let hi = haystack.length; // top most of array
    do {
        const m = Math.floor(lo + (hi - lo) / 2); // getting the midpoint INDEX
        const v = haystack[m]; // setting the value based on mid index
        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}