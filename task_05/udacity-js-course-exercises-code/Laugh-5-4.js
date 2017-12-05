/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(l) {
var h = "";
    for (i = 0; i < l; i++) {
        h += "ha";
    }
    return h + "!";
}
console.log(laugh(10));