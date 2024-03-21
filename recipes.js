

const recipes = [
    {name: "wrap",
    img: src="https://t4.ftcdn.net/jpg/02/47/08/73/360_F_247087316_CVnHQmMAmYBqvgpoG1SbZZ0LDSoAtXqw.jpg",
    ingredient: ["poulet", "tortilla", "poivron"],
    instruction : ["25", "10"],
    etape: ["Lavez votre riz à l'eau froide et rincez 2 ou 3 fois. Faites chauffer sur feu moyen et couvrez dès que l’eau bouillonne. Laissez cuire 5 min surtout sans soulever le couvercle. Baissez le feu et laissez cuire encore 5 min.   Ôtez la casserole du feu, sans retirer le couvercle et laissez reposer 10 min. Placez le riz dans un saladier et ajoutez le vinaigre de riz. Laissez refroidir à température ambiante.", "Coupez le concombre en tout petits dés et émiettez le thon. <br><br> Mélangez-les avec la sauce soja."],
    },
    {name: "sandwich",
    img: src="https://t4.ftcdn.net/jpg/02/47/08/73/360_F_247087316_CVnHQmMAmYBqvgpoG1SbZZ0LDSoAtXqw.jpg",
    ingredient: ["thon", "pain", "mayo"],
    instruction : ["5", "0"],
    etape: ["prend du pain","étale sur les tranches"],
    }
]

const etape = `<div class="etape">
<h4>Etape 1 :</h4>
<hr>
<br>
<p> ${recipes[1].etape[0]}</p>
<br> <br>
<h4>Etape 2 :</h4>
<br>
<br>
<p> ${recipes[1].etape[1]}</p>
`

const h1 =`<h1>${recipes[1].name}</h1>`;
const header = document.querySelector("header")
header.innerHTML=h1