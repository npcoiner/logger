export function test() {
	console.log("hello world");
}
export class log {

	constructor() {
		this.level = "INFO";
		this.outputs = ["console"];
	}
	output(message, obj) {
		for (let i = 0; i < this.outputs.length; i++) {
			let x = this.outputs[i];

			switch (x) {
				case "console":
					console.log(message, obj);
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

	if (level === "INFO") {
		return 2;
	}
}
