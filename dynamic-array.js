class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
    // Your code here
  }

  read(index) {
    if (index <= this.length) {
      return this.data[index];
    }
    return undefined;
  }

  push(val) {

    // Your code here
  }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf (val) {

    // Your code here
  }

  resize () {

    // Your code here
  }

}


module.exports = DynamicArray;
