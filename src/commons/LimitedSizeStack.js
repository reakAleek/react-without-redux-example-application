
export default class LimitedSizeStack {
    constructor(maxSize = 10, initialArr = []) {
        this.maxSize = maxSize;
        this.arr = initialArr;
    }

    length() {
        return this.arr.length;
    }

    push(obj) {
        if (this.arr.length >= this.maxSize) {
            this.arr = this.arr.slice(1);
        } 
        this.arr.push(obj);
    }

    clear() {
        this.arr = [];
    }

    pop() {
        return this.arr.pop();
    }
}