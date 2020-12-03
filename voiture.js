class Voiture {
  constructor(registration, color, weight, horsepower, tankCapacity, nbPlaces) {
    this.registration = registration;
    this.color = color;
    this.weight = weight;
    this.horsepower = horsepower;
    this.tankCapacity = tankCapacity;
    this.nbPlaces = nbPlaces;
    this.niveauEssence = 5.0;
    this.assure = false;
  }

  repeindre(changeColor) {
    if (changeColor != this.color) {
      this.color = changeColor;
      console.log("Couleur changée pour " + this.color);
    } else {
      console.log(
        "Merci pour le rappel, la couleur de la voiture est : " + this.color
      );
    }
  }

  toString(string) {}
}

test = new Voiture("ABCDEF89", "rouge", 900, 100, 50.0, 5);

console.log(test);
