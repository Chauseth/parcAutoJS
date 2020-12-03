//Création de la voiture
const maVoiture = new Voiture("AB-123-CD", "verte", 900, 100, 50.0, 5);
// Affichage des infos de la voiture
console.log(maVoiture.toString());

//Test de changer la couleur, puis de mettre la même couleur que celle appliquée
console.log(maVoiture.repeindre("noire"));
console.log(maVoiture.repeindre("noire"));

//Test d'ajouter trop d'essence, puis de mettre un montant compatible avec la voiture
console.log(maVoiture.mettreEssence(200));
console.log(maVoiture.mettreEssence(20));

//Test déplacement sans assurance, puis ajout d'un assurance
console.log(maVoiture.seDeplacer(100, 30));
console.log(maVoiture.setInsurance());

//Plusieurs tests de déplacement
console.log(maVoiture.seDeplacer(100, 30));
console.log(maVoiture.seDeplacer(100, 70));
console.log(maVoiture.seDeplacer(100, 120));

//Test déplacement trop grand pour l'essence actuelle, ajout d'essence puis retest
console.log(maVoiture.seDeplacer(100, 170));
console.log(maVoiture.mettreEssence(10));
console.log(maVoiture.seDeplacer(100, 170));
