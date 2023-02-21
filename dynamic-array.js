class DynamicArray {

  constructor(defaultSize = 4) {
       this.capacity = defaultSize;
       this.length = 0;
       this.data = new Array(this.capacity)

  }

  read(index) {
   return this.data[index]

  }

  push(val) {
    if(this.length === this.capacity) this.resize()
  this.data[this.length] = val;
  this.length++;

  }


  pop() {
 if(this.length === 0) return;
 this.length--;
 return this.data[this.length]

  }

  shift() {
 if(this.length === 0) return;
 let returnValue = this.data[0];
 this.length--
 for(let i = 0; i < this.length; i++){
  this.data[i] = this.data[i + 1];
 }
  return returnValue
  }

  unshift(val) {
    if(this.length === this.capacity) this.resize()
   for(let i = this.length; i >= 0; i--){
    this.data[i + 1] = this.data[i];
   }
    this.data[0] = val
    this.length++
  }

  indexOf(val) {
  for(let i = 0; i < this.length; i++){
    if(this.data[i] === val) return i
  }
 return -1
  }

  resize() {
    this.capacity *=2;
   let newArray = new Array(this.capacity);
   for(let i = 0; i < this.length; i++){
    newArray[i] = this.data[i];
   }
   this.data = newArray
    // Your code here
  }

}


module.exports = DynamicArray;
