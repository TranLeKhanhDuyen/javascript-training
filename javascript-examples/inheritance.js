class Programmer extends Person {
  hello() {
    return super.hello() + ". I am also a programmer.";
  }
}
const flavio = new Programmer();
flavio.hello();
