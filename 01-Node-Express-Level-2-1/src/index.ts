// @ts-nocheck
import express from "express";
import cors from "cors";

import { IPerson } from "./models/IPerson";
import { IStarship } from "./models/IStarship";

const app = express();
const port = 3000;

const people: IPerson[] = [
  { id: 1, name: "Luke Skywalker", height: 1.72 },
  { id: 2, name: "Darth Vader", height: 2.02 },
  { id: 3, name: "Leia Organa", height: 1.5 },
];

const starships: IStarship[] = [
  {
    id: 1,
    name: "Millennium Falcon",
    length: 34.75,
    max_velocity: 1200,
    armour: "2 Laser guns, 2 Quad laser, Proton torpedoes",
  },
  {
    id: 2,
    name: "X-Wing",
    length: 12.5,
    max_velocity: 1050,
    armour: "4 Laser guns, Proton torpedoes",
  },
  {
    id: 3,
    name: "TIE Fighter",
    length: 6.3,
    max_velocity: 1200,
    armour: "2 Laser guns",
  },
];

app.use(cors());

app.get("/people", (req, res) => {
  res.json(people);
});

app.get("/starships", (req, res) => {
  res.json(starships);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
