function menuOpen() {
    document.getElementById("menu").style.visibility = "visible"
    document.getElementById("close").style.visibility = "visible"
    document.getElementById("hamburger").style.visibility = "hidden"
}

function menuClose() {
    document.getElementById("menu").style.visibility = "hidden"
    document.getElementById("close").style.visibility = "hidden"
    document.getElementById("hamburger").style.visibility = "visible"
}

document.getElementById("bioPargraph").innerHTML = "Mijn naam is Jordi, ik ben " + moment().diff('2000-03-07', 'years') + " jaar oud en woon in Deurne. Momenteel doe ik HBO ICT&Media bij Fontys in Eindhoven. Met behulp van deze opleiding kom ik aan de nodige skillset om later professioneel webdesigner en webdeveloper te worden. Terwijl ik hard bezig ben om mijn diploma te halen, help ik vast kennissen en andere connecties aan een eventuele website. Buiten kantooruren ben ik vaak als winkelmedewerker in de Jumbo te vinden. Daarnaast doe ik één avond per week vrijwilligerswerk als groepsleiding bij jeugdvereniging Jong Nederland Zeilberg. In de weekenden ben ik altijd in voor een feestje of een gezellige borrel."
document.getElementById("copyright").innerHTML = "© " + new Date().getFullYear() + " Jordi Franssen"