import { Request, Response } from "express";
import Joi from "joi";

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

// JOI VALIDATION
const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

// GET ALL PLANETS
const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

// GET A SPECIFIC PLANET ID
const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  res.status(200).json(planet);
};

// CREATE A NEW PLANET
const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id, name };
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res
      .status(400)
      .json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "The planet was created" });
  }
};

// UPDATE A PLANET BY ID
const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedPlanet = { id, name };
  const validateUpdatedPlanet = planetSchema.validate(updatedPlanet);

  if (validateUpdatedPlanet.error) {
    return res
      .status(400)
      .json({ msg: validateUpdatedPlanet.error.details[0].message });
  } else {
    planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
    res.status(200).json({ msg: "The planet was updated" });
  }
};

// DELETE A PLANET BY ID
const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));

  res.status(200).json({ msg: "The planet was deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };
