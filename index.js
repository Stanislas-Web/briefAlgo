var maPhrase = "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.";

function supprimerLePoint(supprimerLePoint) {
    for (let i = 0; i < supprimerLePoint.length; i++) {
        if (supprimerLePoint[i].endsWith('.')) {
            supprimerLePoint[i] = supprimerLePoint[i].slice(0, -1);
        }
    }
};

var maPhrase = maPhrase.split(/[ ,]/);
supprimerLePoint(maPhrase);
var nombreMots = maPhrase.length;
console.log("voici la liste des adresses Mail");
var AdresseMail = maPhrase.filter(mot => mot.includes('@'));
console.log(`${AdresseMail}\n`);

console.log("voici la liste de numero Téléphone");
let NumeroTelephone = maPhrase.filter(numero => numero.includes('+243'));
console.log(`${NumeroTelephone}\n`);

console.log("voici la liste de numero Téléphone Vodacom");
const NumeroVodacom = NumeroTelephone.filter(numero => numero.includes('+24381')||numero.includes('+24382') );
console.log(`${NumeroVodacom}\n`);


console.log("voici la liste de numero Téléphone Tigo");
const NumeroTigo = NumeroTelephone.filter(numero => numero.includes('+24389'));
console.log(`${NumeroTigo}\n`);

console.log("voici la liste de numero Téléphone Orange");
const NumeroOrange = NumeroTelephone.filter(numero => numero.includes('+24384') ||numero.includes('+24385'));
console.log(`${NumeroOrange}\n`);

console.log("voici la liste des adresse mail Pro");
const AdresseMailPro = AdresseMail.filter(adresse => !(adresse.includes('@gmail')));
console.log(`${AdresseMailPro}\n`);

console.log("voici la liste des adresse mail Privées");
const AdresseMailPrivees = AdresseMail.filter(adresse => adresse.includes('@gmail'));
console.log(`${AdresseMailPrivees}\n`);


var lesmotsAsupprimer = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui'];
for (motAsupprimer of lesmotsAsupprimer) {
    maPhrase = maPhrase.filter(mot => !(mot.includes(motAsupprimer)));
}
console.log('les mot Restants');

var nombreMotsRestants = maPhrase.length;
console.log(`${nombreMotsRestants} mots.`) 