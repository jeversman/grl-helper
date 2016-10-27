export class Person {
  id: number;
  name: string;
  age: number;
  power: number;
  skill: number;
  speed: number;
  mind: number;

  getAverage():number {
    return (this.power + this.skill + this.speed + this.mind) / 4;
  }
}
