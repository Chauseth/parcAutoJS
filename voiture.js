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
    this.dashboardMsg = "Bienvenue dans votre nouveau véhicule";
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

  mettreEssence(fuelQuantity) {
    console.log(
      `Vous avez ${this.niveauEssence}/${this.tankCapacity}L dans le réservoir et souhaitez ajouter ${fuelQuantity}L`
    );
    if (fuelQuantity + this.niveauEssence < this.tankCapacity) {
      this.niveauEssence += fuelQuantity;
      console.log(
        `Vous avez maintenant ${this.niveauEssence}L dans le réservoir`
      );
    } else {
      console.log(`Vous ne pouvez ajouter autant de carburant !`);
    }
  }

  seDeplacer(distance, medianSpeed) {
    if (medianSpeed < 50) {
      this.consumptionCalcul(distance, 10.0);
    } else if (medianSpeed >= 50 && medianSpeed < 90) {
      this.consumptionCalcul(distance, 5.0);
    } else if (medianSpeed >= 90 && medianSpeed < 130) {
      this.consumptionCalcul(distance, 8.0);
    } else if (medianSpeed > 130) {
      this.consumptionCalcul(distance, 12.0);
    }
  }

  consumptionCalcul(distance, consumption) {}

  toString(string) {}
}

test = new Voiture("ABCDEF89", "rouge", 900, 100, 50.0, 5);

console.log(test);
test.repeindre("vert");
test.repeindre("vert");
test.mettreEssence(35.5);
