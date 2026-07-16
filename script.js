const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const output = document.querySelector("#terminal-output");
const year = document.querySelector("#year");

const commands = {
  help: `Commands: <strong>proof</strong>, <strong>history</strong>, <strong>contact</strong>, <strong>clear</strong>.`,
  proof: `Production: Agentville, himaia, HappySonar. Advanced prototypes: Aura OS, Juno, Interstellar. <a href="#proof">Jump to evidence →</a>`,
  history: `11+ years: native product engineering → engineering management → CTPO → hands-on AI product building. <a href="#history">Jump to history →</a>`,
  contact: `Email <a href="mailto:oezguercelebi@gmail.com">oezguercelebi@gmail.com</a> or find me on <a href="https://www.linkedin.com/in/oezguercelebi">LinkedIn</a>.`,
};

function print(message) {
  const line = document.createElement("p");
  line.innerHTML = message;
  output.append(line);
  output.scrollTop = output.scrollHeight;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value.trim().toLowerCase();

  if (!command) return;

  print(`<span aria-hidden="true">$</span> ${command}`);

  if (command === "clear") {
    output.replaceChildren();
  } else if (commands[command]) {
    print(commands[command]);
  } else {
    print(`Command not found: <strong>${command}</strong>. Try <strong>help</strong>.`);
  }

  input.value = "";
});

if (year) year.textContent = String(new Date().getFullYear());
