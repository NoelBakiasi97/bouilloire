// Creer une bouilloire (class) et un litre d'eau (class)
// La bouilloir à un contenu et un methode chauffee
// L'eau à une temperature de 20°C
// Mettez l'eau dans la bouilloire et chauffer
// La bouilloire fait monter la temperature de l'eau de 20°C tout les secondes(indice setTimeout). La bouilloire continue de chauffe l'eau jusqu'a ce qu'elle atteigne le 100°C
// Une fois que la temperature atteint les 100°C, la bouilloire nous dit que c'est pret et s'eteint



class Bouilloire {
    constructor(contenu){
        this.contenu = contenu
    }
    chauffer(){
        let timeout = 0
        for(let i = this.contenu[0].temperature;i<=100;i+=20){
            timeout += 1000
            setTimeout(() => {
                console.log(i)
                if(i==100){
                    console.log("C'est pret frère")
                }
            }, timeout);
        }
    }
}

let bouilloire = new Bouilloire([]);


class Eau {
    constructor(temperature){
        this.temperature = temperature
    }
}

let eau = new Eau(20)
bouilloire.contenu.push(eau)

bouilloire.chauffer();






