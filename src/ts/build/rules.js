var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LifeRules_instances, _LifeRules_determineState, _LifeRules_invalidNeighbor, _LifeRules_invalidRow, _LifeRules_isTopRow, _LifeRules_isBottomRow, _LifeRules_invalidColumn, _LifeRules_isLeftColumn, _LifeRules_isRightcolumn, _LifeRules_isStartingCell, _LifeRules_getNeighbors, _LifeRules_getLiveNeighborsAmount;
import { WIDTH_CELLS, HEIGHT_CELLS } from "./constants.js";
import { Cell } from "./cell.js";
class LifeRules {
    constructor(current, next = []) {
        _LifeRules_instances.add(this);
        this.current = current;
        this.next = next;
    }
    generate() {
        this.current.forEach((cell, index) => {
            cell.live = __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_getLiveNeighborsAmount).call(this, cell);
            this.next[index].isAlive = __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_determineState).call(this, cell);
        });
    }
}
_LifeRules_instances = new WeakSet(), _LifeRules_determineState = function _LifeRules_determineState(cell) {
    return ((cell.isAlive && cell.live === 2) || cell.live === 3);
}, _LifeRules_invalidNeighbor = function _LifeRules_invalidNeighbor(x, y, cell) {
    return __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_invalidRow).call(this, y) || __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_invalidColumn).call(this, x) || __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_isStartingCell).call(this, x, y, cell);
}, _LifeRules_invalidRow = function _LifeRules_invalidRow(y) {
    return __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_isTopRow).call(this, y) || __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_isBottomRow).call(this, y);
}, _LifeRules_isTopRow = function _LifeRules_isTopRow(y) {
    return y < 0;
}, _LifeRules_isBottomRow = function _LifeRules_isBottomRow(y) {
    return y === HEIGHT_CELLS;
}, _LifeRules_invalidColumn = function _LifeRules_invalidColumn(x) {
    return __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_isLeftColumn).call(this, x) || __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_isRightcolumn).call(this, x);
}, _LifeRules_isLeftColumn = function _LifeRules_isLeftColumn(x) {
    return x < 0;
}, _LifeRules_isRightcolumn = function _LifeRules_isRightcolumn(x) {
    return x === WIDTH_CELLS;
}, _LifeRules_isStartingCell = function _LifeRules_isStartingCell(x, y, cell) {
    return cell.x === x && cell.y === y;
}, _LifeRules_getNeighbors = function _LifeRules_getNeighbors(cell) {
    var neighbors = [];
    const MAX_NEIGHBORS = 8;
    for (var i = 0; i <= MAX_NEIGHBORS; i++) {
        let currY = (Math.floor(i / 3) - 1) + cell.y;
        let currX = ((i % 3) - 1) + cell.x;
        if (__classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_invalidNeighbor).call(this, currX, currY, cell)) {
            continue;
        }
        let neighborIndex = currY * WIDTH_CELLS + currX;
        neighbors.push(this.current[neighborIndex]);
    }
    return neighbors;
}, _LifeRules_getLiveNeighborsAmount = function _LifeRules_getLiveNeighborsAmount(cell) {
    let neighbors = __classPrivateFieldGet(this, _LifeRules_instances, "m", _LifeRules_getNeighbors).call(this, cell);
    let live = 0;
    neighbors.forEach((cell) => {
        if (cell.isAlive) {
            live++;
        }
    });
    return live;
};
export { LifeRules };
