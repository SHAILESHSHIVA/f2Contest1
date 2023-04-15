/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(ele){
      if(arr.profession==="developer"){
        console.log(ele);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(ele){
      if(ele.profession==="developer"){
        console.log(ele);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let emp = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(emp);
    console.log(arr); 
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    newArray = arr.filter(function(ele){
      return ele.profession!="admin";
    })
  
    console.log(newArray);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
      {id:14,name:"susant",age:"20",profession:"sde"} ,
      {id:24,name:"suman",age:"26",profession:"engineer"},
      {id:34,name:"sazaam",age:"23",profession:"junior developer"}  
    ]
  
    let arr3 = arr.concat(arr2);
    console.log(arr3);
  }
  