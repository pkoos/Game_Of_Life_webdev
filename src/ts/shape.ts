import { Cell } from "./cell.js";

export class Shape {
    name: string;
    pattern: Cell[];

    constructor(name: string, pattern: Cell[]) {
        this.name = name;
        this.pattern = pattern;
    }
}
