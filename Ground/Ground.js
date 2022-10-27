/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Ground/costumes/costume1.svg", {
        x: 338,
        y: -101.75
      }),
      new Costume("costume15", "./Ground/costumes/costume15.svg", {
        x: 290.0000499999998,
        y: 11.400258909259293
      }),
      new Costume("costume3", "./Ground/costumes/costume3.svg", {
        x: 298,
        y: 116.375
      }),
      new Costume("costume4", "./Ground/costumes/costume4.svg", {
        x: 207.63131158815287,
        y: 130.18745598240355
      }),
      new Costume("costume2", "./Ground/costumes/costume2.svg", {
        x: 255,
        y: 60.75
      }),
      new Costume("costume6", "./Ground/costumes/costume6.svg", {
        x: 251.11883,
        y: 268.6232024
      }),
      new Costume("costume7", "./Ground/costumes/costume7.svg", {
        x: 256.11883,
        y: 106.93705
      }),
      new Costume("costume8", "./Ground/costumes/costume8.svg", {
        x: 229.11883,
        y: 78.93705
      }),
      new Costume("costume9", "./Ground/costumes/costume9.svg", {
        x: 250.11883,
        y: 96.93705
      }),
      new Costume("costume10", "./Ground/costumes/costume10.svg", {
        x: 227.61883,
        y: 26.09902685866652
      }),
      new Costume("costume11", "./Ground/costumes/costume11.svg", {
        x: 254,
        y: 28.43705
      }),
      new Costume("costume12", "./Ground/costumes/costume12.svg", {
        x: 277.99606539703825,
        y: 215.25
      }),
      new Costume("costume13", "./Ground/costumes/costume13.svg", {
        x: 271.99606539703825,
        y: 127.43705
      }),
      new Costume("costume14", "./Ground/costumes/costume14.svg", {
        x: 269.11883,
        y: -126.06294969999999
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "NEXT LEVEL" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveNextLevel() {
    this.costumeNumber += 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
  }

  *whenbackdropswitchesto() {
    this.broadcast("Move");
  }
}
