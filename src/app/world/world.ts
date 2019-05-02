export class World {
  public constructor(
    private continents: Continent[]
  ) {
  }
}

class Continent {
  constructor(
    private name: string,
    private countires: Country[]
  ) {}
}

class Country {
  constructor(
    private name: string,
    private provinces: Province[]
  ) {
  }
}

class Province {
  constructor(
    private name: string,
    private cities: City[]
  ) {
  }
}

class City {
  constructor(
    private name: string
  ) {
  }
}
