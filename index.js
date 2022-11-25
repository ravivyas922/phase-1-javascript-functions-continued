// code your solution here
function saturdayFun(newActivity = `roller-skate`)
{

    return `This Saturday, I want to ${newActivity}!`;
}
let mondayWork = function (newActivity = `go to the office`) {

    return `This Monday, I will ${newActivity}.`;
  }
function wrapAdjective(wrap = `*`)
{
    return function(name = `special`)
    {
        return `You are ${wrap}${name}${wrap}!`;
    }
}