/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spikes extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Spikes/costumes/costume3.svg", { x: 0, y: 0 }),
      new Costume("costume2", "./Spikes/costumes/costume2.svg", {
        x: 74.87028195017871,
        y: 40.731227922907976
      }),
      new Costume("costume1", "./Spikes/costumes/costume1.svg", {
        x: 169.27635870491707,
        y: 93.70759082364762
      }),
      new Costume("costume4", "./Spikes/costumes/costume4.svg", {
        x: 104.32460124319425,
        y: 43.02339519134895
      }),
      new Costume("costume5", "./Spikes/costumes/costume5.svg", {
        x: 204.40296725567651,
        y: 252.84023850392805
      }),
      new Costume("costume6", "./Spikes/costumes/costume6.svg", {
        x: 288.5,
        y: -99.5
      }),
      new Costume("costume7", "./Spikes/costumes/costume7.svg", {
        x: 274.5,
        y: -67.5
      }),
      new Costume("costume8", "./Spikes/costumes/costume8.svg", {
        x: 230.63873509861403,
        y: 80.32504501980898
      }),
      new Costume("costume9", "./Spikes/costumes/costume9.svg", {
        x: 177.4989006000435,
        y: 21.66191633144581
      }),
      new Costume("costume10", "./Spikes/costumes/costume10.svg", {
        x: 296.35065080405803,
        y: 62.49760895231488
      }),
      new Costume("costume11", "./Spikes/costumes/costume11.svg", {
        x: 115.25,
        y: 178.25
      }),
      new Costume("costume12", "./Spikes/costumes/costume12.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume13", "./Spikes/costumes/costume13.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume14", "./Spikes/costumes/costume14.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NEXT LEVEL" },
        this.whenIReceiveNextLevel
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume3";
  }

  *whenIReceiveNextLevel() {
    this.costumeNumber += 1;
  }
}
