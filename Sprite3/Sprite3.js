/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 198.5,
        y: -27
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite3/sounds/pop.wav"),
      new Sound("happy-day-113985", "./Sprite3/sounds/happy-day-113985.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("Good-Morning");
  }
}
