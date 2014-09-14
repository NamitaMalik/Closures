// *************************************************************************
// **************************** Lexical Scope ******************************
// *************************************************************************
var global = 1;
function sum() {
    var local = 2;
    return global + local;
}


// *************************************************************************
// **************************** Scope Chain ********************************
// *************************************************************************
var grandFatherName = "John";
function father() {
    var fatherName = "Devis";

    function child() {
        var childName = "Tom";
        var description = "My name is" + childName + " ,my grandfather is " + grandfatherName + " and my father is " + fatherName;
        return description;
    }

    return child();
}
console.log(father());


// *************************************************************************
// **************************** Closure ************************************
// *************************************************************************
var a = 2;
var f = function (param1) {
    var b = param1;
    var n = function () {
        var c = 10;
        var d = a + b + c;
        return d;
    };
    return n;
};
var k = f(20);
var m = f(30);
console.log(k());
console.log(m());


// *************************************************************************
// ************************** Closure Snapshot *****************************
// *************************************************************************
var name;
function person(a, n) {
    var age = a;
    name = n;
    return function () {
        console.log(age, name)
    };
}
var amit = person(25, 'Amit');
var namita = person(23, 'Namita');
console.log(amit());
console.log(namita());