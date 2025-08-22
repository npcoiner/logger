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
	output(message, obj = "") {
		for (let i = 0; i < this.outputs.length; i++) {
			let x = this.outputs[i];

			switch (x) {
				case "console":
					console.log(message, obj);
					break;
				default:
					console.log(x, "FATAL LOGGING ERROR: No output specified");
					break;
			}
		}
	}
	info(message, obj) {
		if (getLevelValue(this.level) >= getLevelValue("INFO")) {
			this.output(message, obj);
		}
	}


}

function getLevelValue(level) {
	return LEVELS[level];
}
