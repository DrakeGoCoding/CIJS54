// To import specific functions
// import { greet, endGreet } from "./module.js";
// greet();
// endGreet();

// To import all functions
import * as module from "./module.js"

// Empty import: run the target module's global code without importing anything
import "./listener.js"

module.greet()
module.endGreet()