import { test, log } from "./logger.js";



test();


let logger = new log("WARN", ["console"]);
logger.info("Yo");
logger.fatal("Fatal");
logger.warn("This is a warning");

let loggerFatal = new log("FATAL", ["console", "file"], "test.log");

loggerFatal.debug("test");
loggerFatal.fatal("test fatal");

