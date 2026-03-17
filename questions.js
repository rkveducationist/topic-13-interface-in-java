const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is an interface in Java?",
options:[
"A blueprint of a class with abstract methods",
"A variable",
"A loop",
"A constructor"
],
answer:"A blueprint of a class with abstract methods",
hint:"Contains method declarations"
},

{
type:"mcq",
question:"Which keyword is used to create an interface?",
options:["interface","class","abstract","implements"],
answer:"interface",
hint:"interface Test {}"
},

{
type:"mcq",
question:"Which keyword is used to implement an interface?",
options:["implements","extends","new","import"],
answer:"implements",
hint:"class A implements B"
},

{
type:"mcq",
question:"Can interface have method body (before Java 8)?",
options:["No","Yes","Sometimes","Depends"],
answer:"No",
hint:"Only abstract methods"
},

{
type:"mcq",
question:"Can interface have method body (Java 8+)?",
options:["Yes","No","Sometimes","Never"],
answer:"Yes",
hint:"Default and static methods"
},

{
type:"mcq",
question:"Can a class implement multiple interfaces?",
options:["Yes","No","Sometimes","Depends"],
answer:"Yes",
hint:"Multiple inheritance supported"
},

{
type:"mcq",
question:"Which access modifier is default for interface methods?",
options:["public","private","protected","default"],
answer:"public",
hint:"Implicitly public"
},

{
type:"mcq",
question:"Can we create object of interface?",
options:["No","Yes","Sometimes","Depends"],
answer:"No",
hint:"Cannot instantiate"
},

{
type:"mcq",
question:"Which method must be overridden in implementing class?",
options:[
"All abstract methods",
"Only one",
"None",
"Optional"
],
answer:"All abstract methods",
hint:"Mandatory implementation"
},

{
type:"mcq",
question:"Which keyword allows multiple inheritance in Java?",
options:["interface","extends","class","abstract"],
answer:"interface",
hint:"Multiple interfaces allowed"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create an interface Animal with method sound()",

required:["interface","void"],

hint:"Method without body",

solution:`interface Animal {
  void sound();
}`
},

{
type:"code",
question:"Implement interface Animal in Dog class",

required:["implements","system.out.println"],

hint:"Override method",

solution:`interface Animal {
  void sound();
}

class Dog implements Animal {

  public void sound(){
    System.out.println("Dog barks");
  }

  public static void main(String[] args){
    Dog d = new Dog();
    d.sound();
  }
}`
},

{
type:"code",
question:"Create interface with two methods and implement both",

required:["interface","implements","system.out.println"],

hint:"Multiple methods",

solution:`interface Test {
  void method1();
  void method2();
}

class Demo implements Test {

  public void method1(){
    System.out.println("Method 1");
  }

  public void method2(){
    System.out.println("Method 2");
  }

  public static void main(String[] args){
    Demo d = new Demo();
    d.method1();
    d.method2();
  }
}`
},

{
type:"code",
question:"Demonstrate multiple interface implementation",

required:["implements","system.out.println"],

hint:"Use two interfaces",

solution:`interface A {
  void showA();
}

interface B {
  void showB();
}

class Demo implements A, B {

  public void showA(){
    System.out.println("Interface A");
  }

  public void showB(){
    System.out.println("Interface B");
  }

  public static void main(String[] args){
    Demo d = new Demo();
    d.showA();
    d.showB();
  }
}`
},

{
type:"code",
question:"Create interface with default method (Java 8+)",

required:["default","system.out.println"],

hint:"Use default keyword",

solution:`interface Test {

  default void display(){
    System.out.println("Default method");
  }
}

class Demo implements Test {

  public static void main(String[] args){
    Demo d = new Demo();
    d.display();
  }
}`
},

{
type:"code",
question:"Create interface with static method",

required:["static","system.out.println"],

hint:"Call using interface name",

solution:`interface Test {

  static void show(){
    System.out.println("Static method");
  }
}

class Demo {

  public static void main(String[] args){
    Test.show();
  }
}`
}

]