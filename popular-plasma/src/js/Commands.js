const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
const terminal = document.getElementById("terminal");

function displayOutput(output) {
    outputDiv.innerHTML += `<span style="line-height:1.5;">${output}<br></span>`;
}


function displayHelp() {
    outputDiv.innerHTML += `
        <pre style="line-height:0;"> 
    <span id="commandOptions" >about        Who is Thai?<br></span>
    <span id="commandOptions" >projects     View coding projects<br></span>
    <span id="commandOptions" >social       Display social media links<br></span>
    <span id="commandOptions" >email        Send me an email<br></span>
    <span id="commandOptions" >help         Displays available commands<br></span>
    <span id="commandOptions" >banner       Display the header<br></span>
        </pre>
    `;
}

function displaySocial() {
    
}

  

function exec(command) {
    if (command.startsWith("echo")) {
        displayOutput(command.slice(5));
      } else if (command === "clear") {
        outputDiv.innerHTML = "";
      } else if (command === "help") {
        displayHelp()
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