import { CITY_OPTIONS, GENDER_OPTIONS, ROLE_OPTIONS } from "./options";

export const userFields = [
  {
    id: 1,
    fieldsName: "name",
    label: "Full Name",
    type: "text",
    name: "name",
  },
  {
    id: 2,
    fieldsName: "password",
    label: "Password",
    type: "password",
  },
  {
    id: 3,
    fieldsName: "email",
    label: "Email Address",
    type: "text",
  },

  {
    id: 4,
    fieldsName: "phone",
    label: "Phone Number",
    type: "text",
  },

  {
    id: 5,
    fieldsName: "address",
    label: "Address",
    type: "text",
  },

  {
    id: 6,
    fieldsName: "city",
    label: "City",
    type: "options",
    options: CITY_OPTIONS,
  },

  {
    id: 7,
    fieldsName: "country",
    label: "Country",
    type: "options",
    options: CITY_OPTIONS,
  },
  {
    id: 8,
    fieldsName: "state",
    label: "State/Region",
    type: "options",
    options: CITY_OPTIONS,
  },

  {
    id: 9,
    fieldsName: "role",
    label: "Role",
    type: "options",
    options: ROLE_OPTIONS,
  },
];

export const profileFields = [
  {
    id: 1,
    fieldsName: "name",
    label: "Full Name",
    type: "text",
  },

  {
    id: 2,
    fieldsName: "email",
    label: "Email Address",
    type: "text",
  },

  {
    id: 3,
    fieldsName: "phone",
    label: "Phone Number",
    type: "text",
  },

  {
    id: 4,
    fieldsName: "address",
    label: "Address",
    type: "text",
  },

  {
    id: 5,
    fieldsName: "gender",
    label: "Gender",
    type: "text",
    options: GENDER_OPTIONS,
  },
];
