import { test, log } from "./logger.js";



test();


let logger = new log("WARN", ["console"]);
logger.info("Yo");
logger.fatal("Fatal");
