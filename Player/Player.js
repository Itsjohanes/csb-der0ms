/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Donut", "./Player/costumes/Donut.svg", {
        x: 43.21334128842432,
        y: 34.045659499880884
      }),
      new Costume("Strawberry-a", "./Player/costumes/Strawberry-a.svg", {
        x: 30.920916155573195,
        y: 46.65536339479809
      }),
      new Costume("costume1", "./Player/costumes/costume1.svg", {
        x: 23.969255000000004,
        y: 23.088030000000003
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NEXT LEVEL" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Move" }, this.whenIReceiveMove),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3)
    ];
  }

  *startAsClone() {}

  *startAsClone2() {
    for (let i = 0; i < 20; i++) {
      this.size += -5;
      yield;
    }
    this.deleteThisClone();
  }

  *whenKeySpacePressed() {
    this.size += -20;
    yield* this.wait(2);
    this.size += 20;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Spikes"].andClones())) {
        this.goto(-204, -2);
        this.stage.vars.deaths += 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
    this.stage.vars.x = 0;
    this.stage.vars.y = 0;
    while (true) {
      this.stage.vars.y += -1;
      if (
        this.keyPressed("left arrow") ||
        (this.mouse.down && this.mouse.x > this.x)
      ) {
        this.stage.vars.x += -1;
      }
      if (
        this.keyPressed("right arrow") ||
        (this.mouse.down && this.mouse.x > this.x)
      ) {
        this.stage.vars.x += 1;
      }
      this.stage.vars.x = this.stage.vars.x * 0.9;
      this.x += this.stage.vars.x;
      if (this.touching(this.sprites["Ground"].andClones())) {
        this.y += 1;
      }
      if (this.touching(this.sprites["Ground"].andClones())) {
        this.y += 1;
      }
      if (this.touching(this.sprites["Ground"].andClones())) {
        this.y += 1;
      }
      if (this.touching(this.sprites["Ground"].andClones())) {
        this.y += 1;
      }
      if (this.touching(this.sprites["Ground"].andClones())) {
        this.y += -4;
        this.x += this.stage.vars.x * -1;
        if (
          this.keyPressed("up arrow") ||
          (this.mouse.down && this.mouse.x > this.x)
        ) {
          this.stage.vars.y = 17;
          if (this.stage.vars.x > 0) {
            this.stage.vars.x = -10;
          } else {
            this.stage.vars.x = 10;
          }
        } else {
          this.stage.vars.x = 0;
        }
      }
      this.y += this.stage.vars.y;
      if (this.touching(this.sprites["Ground"].andClones())) {
        this.y += this.stage.vars.y - this.stage.vars.y * 2;
        this.stage.vars.y = 0;
      }
      this.y += -1;
      if (
        this.keyPressed("up arrow") &&
        this.touching(this.sprites["Ground"].andClones())
      ) {
        this.stage.vars.y = 15;
      }
      this.y += 1;
      if (this.x > 222) {
        this.goto(-217, -20);
        this.broadcast("NEXT LEVEL");
      }
      if (this.touching(Color.rgb(204, 84, 255))) {
        this.stage.vars.y = 22;
      }
      yield;
    }
  }

  *whenIReceiveNextLevel() {
    this.stage.vars.level += 1;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.level = 0;
    this.stage.vars.Views += 1;
    this.goto(-217, -20);
  }

  *whenthisspriteclicked() {
    this.costumeNumber += 1;
  }

  *whenIReceiveMove() {
    this.goto(-204, 2);
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.deaths = 0;
  }

  *whenKeySpacePressed2() {}

  *startAsClone3() {
    for (let i = 0; i < 20; i++) {
      this.size += -5;
      this.effects.ghost += 5;
      yield;
    }
    this.deleteThisClone();
  }
}
