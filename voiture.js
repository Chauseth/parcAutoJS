class Voiture {
  constructor(registration, color, weight, horsepower, tankCapacity, nbPlaces) {
    this.registration = registration;
    this.color = color;
    this.weight = weight;
    this.horsepower = horsepower;
    this.tankCapacity = tankCapacity;
    this.nbPlaces = nbPlaces;
    this.fuelQuantity = 5.0;
    this.assure = false;
  }

  repeindre(changeColor) {
    if (typeof changeColor != "string") {
      return `Merci d'indiquer une couleur.`;
    }

    if (changeColor != this.color) {
      this.color = changeColor;
      return `Couleur changée pour : ${this.color}`;
    } else {
      return `Merci pour le rappel, la couleur de la voiture est : ${this.color}`;
    }
  }

  mettreEssence(addedFuel) {
    if (typeof addedFuel != "number") {
      return `Merci d'indiquer un nombre.`;
    }
    if (addedFuel + this.fuelQuantity <= this.tankCapacity) {
      this.fuelQuantity += addedFuel;
      return `Après un passage a la station, vous avez maintenant ${this.fuelQuantity}L dans le réservoir`;
    } else {
      return `Vous ne pouvez ajouter autant de carburant !`;
    }
  }

  seDeplacer(distance, medianSpeed) {
    if (typeof distance != "number" || typeof medianSpeed != "number") {
      return `Merci d'indiquer un nombre pour la distance et la vitesse moyenne.`;
    }

    if (this.assure == true) {
      if (medianSpeed < 50) {
        return this.consumptionCalcul(distance, 10.0);
      } else if (medianSpeed >= 50 && medianSpeed < 90) {
        return this.consumptionCalcul(distance, 5.0);
      } else if (medianSpeed >= 90 && medianSpeed < 130) {
        return this.consumptionCalcul(distance, 8.0);
      } else if (medianSpeed > 130) {
        return this.consumptionCalcul(distance, 12.0);
      }
    } else {
      return "Veuillez assurer votre véhicule avant de l'utliser";
    }
  }

  consumptionCalcul(distance, consumption) {
    let consommation = distance * (consumption / 100);

    if (consommation > this.fuelQuantity) {
      return `Vous ne pouvez vous déplacer autant sans ajouter ${
        consommation - this.fuelQuantity
      }L de carburant`;
    } else {
      this.fuelQuantity -= consommation;
      return `Vous avez maintenant ${this.fuelQuantity}/${this.tankCapacity}L dans le réservoir !`;
    }
  }

  setInsurance() {
    this.assure = !this.assure;
    if (this.assure == true) {
      return "Votre véhicule est maintenant assuré";
    } else {
      return "Votre véhicule n'est plus assuré";
    }
  }

  toString() {
    return `Le véhicule immatriculé ${this.registration} est de couleur ${this.color}. Il a une puissance de ${this.horsepower} chevaux.`;
  }
}
