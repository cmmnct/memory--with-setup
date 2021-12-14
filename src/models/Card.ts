import { Icard } from "@/interfaces/Card";

export class Card implements Icard {
  r;
  g;
  b;
  a;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
