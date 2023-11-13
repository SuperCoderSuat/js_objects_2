// **************************************
//            Objects lvl 1
// **************************************

let person = {
    vorname: "Anton",
    nachname: "Fisch",
    fullName: function() {
        return this.vorname + " " + this.nachname;
    }
};

// console.log(person);
console.log(person.fullName());

// **************************************
//            Objects lvl 2
// **************************************

let person1 = {
    vorname: 'Anton',
    nachname: 'Fisch',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function() {

    return `Name: ${this.vorname}<br>
            Alter: ${this.alter}<br>
            Körpergröße: ${this.groesse}<br>
            Familienstand: ${this.groesse}`;
    }
};

document.getElementById("person1").innerHTML = person1.profil();

// **************************************
//            Objects lvl 3
// **************************************

let personFunction = {
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Nüssler"
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person2").innerHTML = anzeigeImHTMLDokument;

// **************************************
//            Objects lvl 4
// **************************************

function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad()
obj1.fahrrad()
obj2.fahrrad()




