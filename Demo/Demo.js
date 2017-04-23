function Student(name){
  this.name = name;
  this.hello = function(){
    console.log('Hello,' + this.name + '!');
  }
}
var limeng = new Student('limeng');
console.log(limeng.name);
limeng.hello();

