//1
var out11 = document.getElementById('out_1-1');
for (var i = 4; i < 401; i++) {
    out11.innerHTML += i + " ";
}
var out12 = document.getElementById('out_1-2');
for (var i = 4; i < 401; i++) {
    out12.innerHTML += i + "<br>";
}
var out13 = document.getElementById('out_1-3');
for (var i = 4; i < 401; i += 3) {
    out13.innerHTML += i + " ";
}
var out14 = document.getElementById('out_1-4');
for (var i = 654; i >= 0; i--) {
    out14.innerHTML += i + " ";
}

//2
var mas1 = [3, 6, 1, 13, 88, 43];
console.log(mas1[0] + " " + mas1[3]);

var mas2 = ['Hi', "hello", 34, "prima"];
console.log(mas2[1] + " " + mas2[mas2.length - 1]);

var mas3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
console.log(mas3.length);

var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]
var out21 = document.getElementById('out_2-1');
for (var i = arr.length - 1; i >= 0; i--) {
    out21.innerHTML += arr[i] + ' ';
}

//3
var arr1 = [2, 3, [4,5]];
console.log(arr1);
var out31 = document.getElementById('out_3-1');
out31.innerHTML = arr1[0] + ' ' + arr1[1];
out31.innerHTML += "<br>" + arr1[2][0] + ' ' + arr1[2][1];

console.log(arr1[2][0] + ' ' + arr1[2][1]);

console.log(arr1[2].length);

var arr2 = [ 2, [3,4,5], [6,7,8]  ];
console.log(arr2[1][1] + " " + arr2[2][2]);
console.log(arr2[2]);
console.log(arr2[0]);

var arr3 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];;
console.log(arr3[arr3.length - 1]);
for (var i = 0; i < arr3[2].length; i++) {
    console.log(arr3[2][i]);
}

var arr4 = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
console.log(arr4[0][2] + ' ' + arr4[1][0])
