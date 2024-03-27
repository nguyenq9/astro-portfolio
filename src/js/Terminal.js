import { exec, displayOutput } from "./Commands"

const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
inputField.style.width = inputField.value.length + "ch";


function executeCommand(command) {
    displayOutput(`<span id="commandSignature" style="color:#21f838;line-height:1.5;margin-right:4px">guest@thainguyen.com:~$</span>&nbsp${command}`);
    exec(command)
    inputField.scrollIntoView()
}

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const command = inputField.value.trim();
        if (command !== "") {
            executeCommand(command);
            inputField.value = "";
        }
        this.style.width = this.value.length + 'ch'
        return;
    }

    if (this.value.length >= 20) {
        return 
    }
    this.style.width = this.value.length + 1 + "ch";

});

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        this.style.width = (this.value.length - 1) + "ch";
    }
});