// Write your code here!
const removeThis = document.getElementsByTagName("main")[0];
removeThis.remove();
const newHeader = document.createElement("h1");
newHeader.textContent = ("Rebekah is the champion!");
newHeader.id = ("victory");