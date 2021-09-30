//makes with normal javascript approach
//load npm module
const _=require('lodash');
const moment=require('moment');


let colors=['black','pink','red','white'];

let result=' ';
colors.forEach((color)=>{
     result +=`${color} `;

});
console.log(result);

//do the same functionality with lodash
//first load the lodash

 colors=['black','pink','red','white'];
 result=' ';
 _.forEach(colors,function (color){
     result +=`${color} `;
 });
console.log(result);

//mixed array with normal javascript
let array=[100,'text',1515,'abc',544];
let countElementsJs=function (array) {
    let numberCount=0;
    let stringCount=0;
    array.forEach(function (element){
       if(typeof element==='number'){
           numberCount++;
       }
       if(typeof element === "string"){
           stringCount++;
       }
    });
    return{numberCount,stringCount};
};
let output=countElementsJs(array);
console.log(output);

//same do with lodash
array=[100,'text',1515,'abc',544];
let countElementLodash=function(array){
    let numberCount=0;
    let stringCount=0;
    _.forEach(array,function (element){
      _.isNumber(element)?numberCount++ :numberCount;
      _.isString(element)?stringCount++ :stringCount;
    });
    return{stringCount,numberCount};

};
output=countElementLodash(array);
console.log(output);

/////moment.js
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment("20000820", "YYYYMMDD").fromNow());
console.log(moment().startOf('day').fromNow());
//local specific data
//for hindi local
moment.locale('hi')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
