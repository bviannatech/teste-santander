function greeter(person: string) {
	return "Hello, " + person;
}

let user = "Bruno Viana";

document.body.textContent = greeter(user);