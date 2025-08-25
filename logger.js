export function test() {
	console.log("hello world");
}

const LEVELS = {
	"DEBUG": 1,
	"INFO": 2,
	"WARN": 3,
	"ERROR": 4,
	"FATAL": 5,
}
export class log {

	constructor(level = "INFO", outputs = ["console"]) {
		this.level = level;
		this.outputs = outputs;
	}
	output(level, message, obj = "") {
		for (let i = 0; i < this.outputs.length; i++) {
			let x = this.outputs[i];

			switch (x) {
				case "console":
					console.log(level, message, obj);
					break;
				default:
					console.log(x, "FATAL LOGGING ERROR: No output specified");
					break;
			}
		}
	}
	debug(message, obj) {
		if (getLevelValue(this.level) <= getLevelValue("DEBUG")) {
			this.output("DEBUG", message, obj);
		}
	}
	info(message, obj) {
		if (getLevelValue(this.level) <= getLevelValue("INFO")) {
			this.output("INFO", message, obj);
		}
	}
	warn(message, obj) {
		if (getLevelValue(this.level) <= getLevelValue("WARN")) {
			this.output("WARN", message, obj);
		}
	}
	error(message, obj) {
		if (getLevelValue(this.level) <= getLevelValue("ERROR")) {
			this.output("ERROR", message, obj);
		}
	}
	fatal(message, obj) {
		if (getLevelValue(this.level) <= getLevelValue("FATAL")) {
			this.output("FATAL", message, obj);
		}
	}
}

function getLevelValue(level) {
	return LEVELS[level];
}
