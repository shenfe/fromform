const any = (arr, func) => {
    if (arr instanceof Array) {
        for (let a of arr) {
            if (func(a)) return true;
        }
    } else if (arr instanceof Object) {
        for (let p in arr) {
            if (!arr.hasOwnProperty(p)) continue;
            if (func(arr[p], p)) return true;
        }
    }
    return false;
};

export {
    any
}