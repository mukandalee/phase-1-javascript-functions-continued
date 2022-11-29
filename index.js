function saturdayFun(activity= "roller-skate") {
    let fun;
    return fun= `This Saturday, I want to ${activity}!`
  }
  const mondayWork = function (act="go to the office") {
    let job;
    
    return  job=`This Monday, I will ${act}.`;
  }

function wrapAdjective( visual_flair= "*") {
  const innerFunction = function ( character = "special") {
    let res;
    return  res=`You are ${visual_flair}${character}${visual_flair}!`
  }
  return innerFunction
}
 wrapAdjective(("%")("a dedicated programmer"));
