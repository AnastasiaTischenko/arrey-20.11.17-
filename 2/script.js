//1
var m1 = [7, [7, 8,9], 17];
out_1.innerHTML = m1[1][2];

var m2 = [5, {'one': 2000, 'two': 4000}, 56];
out_2.innerHTML = m2[1].two + " " + m2[2];

var m3 ={'one': 5, 'two': [23, 45]}
out_3.innerHTML = m3.two[1];

var m4 ={'one': 5, 'two': {'kkk':23,'mmm':45}}
out_4.innerHTML = m4.two.mmm;

var m5 =[{'mts': '+38050556677', 'life': '+093445566'},{'mts': '+38050665544', 'life': '+093112233'}]
for (var i = 0; i < m5.length; i++) {
    out_5.innerHTML += m5[i].mts + "  ";
}
for (var i = 0; i < m5.length; i++) {
    out_5.innerHTML += m5[i].life + "  ";
}

var m6 ={
    'phone1': {'mts': '+38050556677', 'life': '+093445566'},
    'phone2':  {'mts': '+38050665544', 'life': '+093112233'}
}
for (var key in m6) {
    out_6.innerHTML += m6[key].mts + ' ';
}
for (var key in m6) {
    out_6.innerHTML += m6[key].life + ' ';
}

var m7 =[['+38050556677', '+093445566'],['+38050665544', '+093112233']];
for (var i = 0; i < m7.length; i++) {
    for (var j = 0; j < m7[i].length; j++) {
        out_7.innerHTML += m7[i][j] + " "
    }
    out_7.innerHTML += "<br>"
}

var m8 = [2, 3, 4, 5, 6, 4, 77, 32, 4]; 
for (var i = 0; i < m8.length; i++) {
    out_8.innerHTML += "[" + i + "] : " + m8[i] + "<br>"
}

var m9 = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
for (var i = 0; i < m9.length; i++) {
    if ( m9[i] < 35){
        out_8.innerHTML += m9[i] + " ";
    }
}

var m10 = {                                                         
    "one" : {"name" : "Alex", "age": 17},
    "two" : {"name" : "Ivan", "age": 27},
    "three" : {"name" : "Sergey", "age": 28},
    "four" : {"name" : "Vitaliy", "age": 30},
    "five" : {"name" : "Olga", "age": 24}
}
var str = "";
for (var key in m10){
    str += m10[key].name + ' ';
}
out_10.innerHTML = str;