function  saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wraps = `special`){
    return function inner(message){
        return `You are ${wraps}${message}${wraps}!`;
    }
}