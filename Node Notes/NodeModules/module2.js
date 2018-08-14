var localVarOne = 10;
var localVarTwo = 20;
var globalVarOne = 5;

function functOne(){
  console.log(localVarOne);
}

function functTwo(){
  console.log(localVarTwo);
}

module.exports.functOne = functOne;
module.exports.functTwo = functTwo;
module.exports.globalVarOne = globalVarOne;
