const element = document.getElementById("main")
element.remove();

const newHeader = document.createElement("h1")
newHeader.textContent = "Rebekah is the champion"
newHeader.id = "victory"
document.body.append(newHeader)

