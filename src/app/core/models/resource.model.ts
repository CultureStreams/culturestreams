export class Resource {
  id: number = 0;
  name: string = "";

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setId(id: number) {
    this.id = id;
  }
  
  setName(name: string) {
    this.name = name;
  }
}
