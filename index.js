import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Spikes from "./Spikes/Spikes.js";
import Ground from "./Ground/Ground.js";
import Sprite5 from "./Sprite5/Sprite5.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: -204,
    y: -93,
    direction: 90,
    costumeNumber: 3,
    size: 60,
    visible: true,
    layerOrder: 6
  }),
  Sprite4: new Sprite4({
    x: -112.20790690209253,
    y: 157,
    direction: 90,
    costumeNumber: 1,
    size: 35,
    visible: true,
    layerOrder: 5
  }),
  Sprite3: new Sprite3({
    x: -147,
    y: 156,
    direction: 90,
    costumeNumber: 1,
    size: 35,
    visible: true,
    layerOrder: 4
  }),
  Sprite1: new Sprite1({
    x: -144,
    y: 137,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 3
  }),
  Spikes: new Spikes({
    x: -1.4705882352941444,
    y: -18.7647058823529,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Ground: new Ground({
    x: 3.117647058823536,
    y: -4.352941176470722,
    direction: 90,
    costumeNumber: 1,
    size: 102.17287689185372,
    visible: true,
    layerOrder: 2
  }),
  Sprite5: new Sprite5({
    x: -21,
    y: 19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
