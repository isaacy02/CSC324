//Isaac Young
//Chapter 6

//group
class Group {
    constructor() {
      this.people = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.people.push(value);
      }
    }
  
    delete(value) {
      this.people = this.people.filter(v => v !== value);
    }
  
    has(value) {
      return this.people.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  console.log(group.has(30));
