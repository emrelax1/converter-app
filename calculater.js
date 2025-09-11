const convertions = [
  {
    from_key: "kg",
    to_key: "lb",
    multiplier: (value) => {
      return value * 2.20462;
    },
  },
  {
    from_key: "kg",
    to_key: "g",
    multiplier: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "g",
    to_key: "kg",
    multiplier: (value) => {
      return value * 0.001;
    },
  },
  {
    from_key: "g",
    to_key: "lb",
    multiplier: (value) => {
      return value * 0.00220462;
    },
  },
  {
    from_key: "lb",
    to_key: "kg",
    multiplier: (value) => {
      return value * 0.45359237;
    },
  },
  {
    from_key: "lb",
    to_key: "g",
    multiplier: (value) => {
      return value * 453.59237;
    },
  },
  {
    from_key: "m",
    to_key: "cm",
    multiplier: (value) => {
      return value * 100;
    },
  },
  {
    from_key: "m",
    to_key: "ft",
    multiplier: (value) => {
      return value * 3.28084;
    },
  },
  {
    from_key: "m",
    to_key: "in",
    multiplier: (value) => {
      return value * 39.3701;
    },
  },
  {
    from_key: "cm",
    to_key: "m",
    multiplier: (value) => {
      return value * 0.01;
    },
  },
  {
    from_key: "cm",
    to_key: "ft",
    multiplier: (value) => {
      return value * 0.0328084;
    },
  },
  {
    from_key: "cm",
    to_key: "in",
    multiplier: (value) => {
      return value * 0.3937;
    },
  },
  {
    from_key: "ft",
    to_key: "m",
    multiplier: (value) => {
      return value * 0.3048;
    },
  },
  {
    from_key: "ft",
    to_key: "cm",
    multiplier: (value) => {
      return value * 30.48;
    },
  },
  {
    from_key: "ft",
    to_key: "in",
    multiplier: (value) => {
      return value * 12;
    },
  },
  {
    from_key: "in",
    to_key: "m",
    multiplier: (value) => {
      return value * 0.0254;
    },
  },
  {
    from_key: "in",
    to_key: "cm",
    multiplier: (value) => {
      return value * 2.54;
    },
  },
  {
    from_key: "in",
    to_key: "ft",
    multiplier: (value) => {
      return value * 0.08333;
    },
  },
  {
    from_key: "l",
    to_key: "ml",
    multiplier: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "l",
    to_key: "gal",
    multiplier: (value) => {
      return value * 0.2642;
    },
  },
  {
    from_key: "ml",
    to_key: "l",
    multiplier: (value) => {
      return value * 0.001;
    },
  },
  {
    from_key: "ml",
    to_key: "gal",
    multiplier: (value) => {
      return value * 0.0002642;
    },
  },
  {
    from_key: "gal",
    to_key: "l",
    multiplier: (value) => {
      return value * 3.78541;
    },
  },
  {
    from_key: "gal",
    to_key: "ml",
    multiplier: (value) => {
      return value * 3785.41;
    },
  },
  {
    from_key: "k",
    to_key: "c",
    multiplier: (value) => {
      return value - 273.15;
    },
  },
  {
    from_key: "k",
    to_key: "f",
    multiplier: (value) => {
      return ((value - 273.15) * 9) / 5 + 32;
    },
  },
  {
    from_key: "c",
    to_key: "k",
    multiplier: (value) => {
      return value + 273.15;
    },
  },
  {
    from_key: "c",
    to_key: "f",
    multiplier: (value) => {
      return (value * 9) / 5 + 32;
    },
  },
  {
    from_key: "f",
    to_key: "c",
    multiplier: (value) => {
      return ((value - 32) * 5) / 9;
    },
  },
  {
    from_key: "f",
    to_key: "k",
    multiplier: (value) => {
      return ((value - 32) * 5) / 9 + 273.15;
    },
  },
];
