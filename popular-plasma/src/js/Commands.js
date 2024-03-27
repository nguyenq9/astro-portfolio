const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
const terminal = document.getElementById("terminal");

function displayOutput(output) {
    outputDiv.innerHTML += `<span style="line-height:1.5;">${output}<br></span>`;
    terminal.scrollTop = terminal.scrollHeight;
  }
  

function exec(command) {
    if (command.startsWith("echo")) {
        displayOutput(command.slice(5));
      } else if (command === "clear") {
        outputDiv.innerHTML = "";
      } else if (command === "help") {
        displayOutput("banner")
        displayOutput("clear")
        displayOutput("echo")
      } else if (command === "banner") {
        outputDiv.innerHTML += `
        <pre>
        ████████╗██╗  ██╗ █████╗ ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
        ╚══██╔══╝██║  ██║██╔══██╗██║    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
           ██║   ███████║███████║██║    ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
           ██║   ██╔══██║██╔══██║██║    ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
           ██║   ██║  ██║██║  ██║██║    ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
           ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
        </pre>                        
        <span>For a list of available commands, type <span id="help-text">'help'</span>.<br></span>`
      } else {
        displayOutput("Command not recognized.");
      }
}

export { exec, displayOutput}