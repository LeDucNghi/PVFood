import { Images } from "constants/images";
import { fake_options } from "formik/admin";
import { faker } from "@faker-js/faker";
import { sample } from "lodash";

export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 16,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 15,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    email: "leducnghi28122000hiie@gmail.com",
    role: "member",
  },
];

export const account = {
  displayName: "Jaydon Frankie",
  email: "demo@minimals.cc",
  photoURL: Images.avatarDefault,
};

export const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: `../assets/image/avatars/avatar_${index + 1}.jpg`,
  avatarUrl: faker.image.avatar(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  password: faker.internet.password(10, true, /[A-Z]/),
  // country: faker.address.country(),
  // city: faker.address.city(),
  // state: faker.address.state(),
  country: sample(fake_options),
  city: sample(fake_options),
  state: sample(fake_options),
  address: faker.address.buildingNumber(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "user",
    "admin",
    // "Leader",
    // "Hr Manager",
    // "UI Designer",
    // "UX Designer",
    // "UI/UX Designer",
    // "Project Manager",
    // "Backend Developer",
    // "Full Stack Designer",
    // "Front End Developer",
    // "Full Stack Developer",
  ]),
}));

export const orders = [...Array(4)].map((_, index) => ({
  id: faker.datatype.uuid(),
  status: "pending",
  name: "Lucian Obrien",
  address: "15 đường số 18, phường 8, quận Gò Vấp, TPHCM",
  phone: "0338006534",
  time: " November 27th 2022, 3:14:26 pm",
}));
