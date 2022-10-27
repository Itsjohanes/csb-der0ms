/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop11", "./Stage/costumes/backdrop11.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop12", "./Stage/costumes/backdrop12.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop13", "./Stage/costumes/backdrop13.svg", {
        x: 265,
        y: 201
      }),
      new Costume("backdrop14", "./Stage/costumes/backdrop14.svg", {
        x: 265,
        y: 201
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "NEXT LEVEL" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.deaths = 0;
    this.vars.x = 0;
    this.vars.y = 0;
    this.vars.level = 0;
    this.vars.Views = 52;

    this.watchers.deaths = new Watcher({
      label: "Deaths:",
      style: "normal",
      visible: true,
      value: () => this.vars.deaths,
      x: 608,
      y: -153
    });
  }

  *whenIReceiveNextLevel() {
    this.costumeNumber += 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }
}
