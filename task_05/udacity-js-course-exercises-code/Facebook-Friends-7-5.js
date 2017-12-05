/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Alex",
    friends: 100,
    messages: ["I like having fun", "I was in NY", "My breakfast"],
    postMessage: function addMessages(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function removeMessages(index) {
        facebookProfile.messages.splice(index, 1);
    },   
    addFriend: function newFriend() {
        facebookProfile.friends += 1;
    },
    removeFriend: function delFriend() {
        facebookProfile.friends -= 1;
    },
};

facebookProfile.deleteMessage(1, 1);
console.log(facebookProfile.messages);