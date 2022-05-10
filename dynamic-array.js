class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);

  }

  read(index) {
    if (index <= this.length) {
      return this.data[index];
    }
    return undefined;
  }

  push(val) {
    this.data[this.length] = val
    this.length += 1
    if (this.length > this.capacity){
      this.resize ()
    }
    return this.length
  }


  pop() {
    if (this.length - 1 >= 0){
        let popped = this.data[this.length - 1]
        this.data[this.length - 1] = undefined;
        this.length -= 1;
        return popped
    } else {
      return undefined
    }
  }

  shift() {
    let shifted = this.data[0]

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = undefined;
    this.length -= 1;

    return shifted;
  }

  unshift(val) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length += 1;
    if (this.length > this.capacity){
      this.resize ()
    }
    return this.length;
  }

  indexOf (val) {
    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];
      if (element === val){
        return i;
      }
    }
    return -1
  }

  resize () {
    this.capacity *= 2;
  }

}

module.exports = DynamicArray;