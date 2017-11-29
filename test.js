function conditional(condition,left,right){
    return condition?left:right;
}
function test(){
    var a = 1>2?3:2;
    var b = true?2:1;
    return a;
}
var d = conditional(true,1,2);
var e = conditional(flase,1,2);
var f = conditional(1>2,1,2);

