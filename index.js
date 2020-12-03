const maVoiture = new Voiture("AB-123-CD", "verte", 900, 100, 50.0, 5);

console.log(maVoiture.toString());
console.log(maVoiture.repeindre("noire"));
console.log(maVoiture.repeindre("noire"));
console.log(maVoiture.mettreEssence(200));
console.log(maVoiture.mettreEssence(20));
console.log(maVoiture.seDeplacer(100, 30));
console.log(maVoiture.setInsurance());
console.log(maVoiture.seDeplacer(100, 30));
console.log(maVoiture.seDeplacer(100, 70));
console.log(maVoiture.seDeplacer(100, 120));
console.log(maVoiture.seDeplacer(100, 170));
console.log(maVoiture.mettreEssence(10));
console.log(maVoiture.seDeplacer(100, 170));
