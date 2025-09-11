const convertions = [
  {
    from_key: "Kilogram(kg)",
    to_key: "Pound(lb)",
    multiplier: (value) => {
      return value * 2.20462;
    },
  },
  {
    from_key: "Kilogram(kg)",
    to_key: "Gram(g)",
    multiplier: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "Gram(g)",
    to_key: "Kilogram(kg)",
    multiplier: (value) => {
      return value * 0.001;
    },
  },
  {
    from_key: "Gram(g)",
    to_key: "Pound(lb)",
    multiplier: (value) => {
      return value * 0.00220462;
    },
  },
  {
    from_key: "Pound(lb)",
    to_key: "Kilogram(kg)",
    multiplier: (value) => {
      return value * 0.45359237;
    },
  },
  {
    from_key: "Pound(lb)",
    to_key: "Gram(g)",
    multiplier: (value) => {
      return value * 453.59237;
    },
  },
  {
    from_key: "Metre(m)",
    to_key: "Santimetre(cm)",
    multiplier: (value) => {
      return value * 100;
    },
  },
  {
    from_key: "Metre(m)",
    to_key: "Feet(ft)",
    multiplier: (value) => {
      return value * 3.28084;
    },
  },
  {
    from_key: "Metre(m)",
    to_key: "İnç(in)",
    multiplier: (value) => {
      return value * 39.3701;
    },
  },
  {
    from_key: "Santimetre(cm)",
    to_key: "Metre(m)",
    multiplier: (value) => {
      return value * 0.01;
    },
  },
  {
    from_key: "Santimetre(cm)",
    to_key: "Feet(ft)",
    multiplier: (value) => {
      return value * 0.0328084;
    },
  },
  {
    from_key: "Santimetre(cm)",
    to_key: "İnç(in)",
    multiplier: (value) => {
      return value * 0.3937;
    },
  },
  {
    from_key: "Feet(ft)",
    to_key: "Metre(m)",
    multiplier: (value) => {
      return value * 0.3048;
    },
  },
  {
    from_key: "Feet(ft)",
    to_key: "Santimetre(cm)",
    multiplier: (value) => {
      return value * 30.48;
    },
  },
  {
    from_key: "Feet(ft)",
    to_key: "İnç(in)",
    multiplier: (value) => {
      return value * 12;
    },
  },
  {
    from_key: "İnç(in)",
    to_key: "Metre(m)",
    multiplier: (value) => {
      return value * 0.0254;
    },
  },
  {
    from_key: "İnç(in)",
    to_key: "Santimetre(cm)",
    multiplier: (value) => {
      return value * 2.54;
    },
  },
  {
    from_key: "İnç(in)",
    to_key: "Feet(ft)",
    multiplier: (value) => {
      return value * 0.08333;
    },
  },
  {
    from_key: "Litre(L)",
    to_key: "Mililitre(ml)",
    multiplier: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "Litre(L)",
    to_key: "Galon(gal)",
    multiplier: (value) => {
      return value * 0.2642;
    },
  },
  {
    from_key: "Mililitre(ml)",
    to_key: "Litre(L)",
    multiplier: (value) => {
      return value * 0.001;
    },
  },
  {
    from_key: "Mililitre(ml)",
    to_key: "Galon(gal)",
    multiplier: (value) => {
      return value * 0.0002642;
    },
  },
  {
    from_key: "Galon(gal)",
    to_key: "Litre(L)",
    multiplier: (value) => {
      return value * 3.78541;
    },
  },
  {
    from_key: "Galon(gal)",
    to_key: "Mililitre(ml)",
    multiplier: (value) => {
      return value * 3785.41;
    },
  },
  {
    from_key: "Kelvin(K)",
    to_key: "Celsius(°C)",
    multiplier: (value) => {
      return value - 273.15;
    },
  },
  {
    from_key: "Kelvin(K)",
    to_key: "Fahrenayt(°F)",
    multiplier: (value) => {
      return ((value - 273.15) * 9) / 5 + 32;
    },
  },
  {
    from_key: "Celsius(°C)",
    to_key: "Kelvin(K)",
    multiplier: (value) => {
      return value + 273.15;
    },
  },
  {
    from_key: "Celsius(°C)",
    to_key: "Fahrenayt(°F)",
    multiplier: (value) => {
      return (value * 9) / 5 + 32;
    },
  },
  {
    from_key: "Fahrenayt(°F)",
    to_key: "Celsius(°C)",
    multiplier: (value) => {
      return ((value - 32) * 5) / 9;
    },
  },
  {
    from_key: "Fahrenayt(°F)",
    to_key: "Kelvin(K)",
    multiplier: (value) => {
      return ((value - 32) * 5) / 9 + 273.15;
    },
  },
];
