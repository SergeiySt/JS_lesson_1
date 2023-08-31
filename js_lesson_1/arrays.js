
//---------------- # 1
function Even(arr) {
    const a = arr.filter(number => number % 2 === 0);
    const result = document.getElementById("result_1");
    result.textContent = a.join(", ");
}

function Zero(arr) {
    const b = arr.filter(number => number % 10 === 0);
    const result = document.getElementById("result_2");
    result.textContent = b.join(", ");
}

const arr = [12, 5, 30, 8, 42, 3, 17, 20];
Even(arr);
Zero(arr);



//---------------- # 2
function oddIndex(arr) {
    const a = [];
    for (let i = 1; i < arr.length; i += 2) {
        a.push(arr[i]);
    }
    const result = document.getElementById("result_3");
    result.textContent = a.join(", ");
}

function evenIndex(arr) {
    const a = [];
    for (let i = 2; i < arr.length; i += 3) {
        a.push(arr[i]);
    }
    const result = document.getElementById("result_4");
    result.textContent = a.join(", ");
}

const arr_1 = [11, 23, 34, 42, 56, 64, 78, 80, 94, 100];
oddIndex(arr_1);
evenIndex(arr_1);


//---------------- # 3
function f1(arr) {
    const a = arr.map(number => {
        if (number % 10 === 4) {
            return number / 2;
        } else {
            return number;
        }
    });
    return a;
}

const arr_2 = [34, 25, 42, 14, 57, 64];
const x = f1(arr_2);
const result = document.getElementById("result_5");
result.textContent = x.join(", ");


function f2(arr) {
    const a = arr.map(number => {
        if (number % 2 === 0) {
            return number ** 2;
        } else {
            return number * 2;
        }
    });
    return a;
}

const arr_3 = [34, 25, 42, 14, 57, 64];
const y = f2(arr_3);
const res = document.getElementById("result_6");
res.textContent = y.join(", ");



function f3(arr, a, b) {
    const x = arr.map((number, index) => {
        if (number % 2 === 0) {
            return number + a;
        } else if (index % 2 === 0) {
            return number - b;
        } else {
            return number;
        }
    });
    return x;
}

const arr_4 = [34, 25, 42, 14, 57, 64];
const a1 = 2;
const b1 = 5;
const d = f3(arr_4, a1, b1);
const res_1 = document.getElementById("result_7");
res_1.textContent = d.join(", ");



//---------------- # 4
function f4(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

const arr_5 = [10, 25, 30, 40, 50, 63, 70];
const e = f4(arr_5);
const res_2 = document.getElementById("result_8");
res_2.textContent = e.join(", ");


function f5(arr) {
    const x = arr.map(number => {
        if (number % 2 === 0) {
            return number / 2;
        } else {
            return number * 2;
        }
    });
    return x;
}

const arr_6 = [10, 25, 30, 40, 50, 63, 70];
const x1 = f5(arr_6);
const res_3 = document.getElementById("result_9");
res_3.textContent = x1.join(", ");


function f6(arr, m, n) {
    const y = arr.map((number, index) => {
        if (number % 2 !== 0) {
            return number - m;
        } else if (index % 2 !== 0) {
            return number + n;
        } else {
            return number;
        }
    });
    return y;
}

const arr_7 = [10, 25, 30, 40, 50, 63, 70];
const m = 8;
const n = 4;
const v = f6(arr_7, m, n);
const res_4 = document.getElementById("result_10");
res_4.textContent = v.join(", ");


