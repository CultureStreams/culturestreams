export class Resource {
  id: number = null;
  name: string = null;

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
