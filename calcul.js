window.addEventListener("load", function(){
    
    document.getElementById("i_nom_jupiter").addEventListener("keyup", function(){
            var valeur=parseInt(window.document.querySelector("#i_nom_jupiter").value);
            valeur= (valeur/9.81)*100;
        document.getElementById("resultat").innerHTML=valeur;
    });
    
    document.getElementById("i_nom_mars").addEventListener("keyup", function(){
            var valeur=parseInt(window.document.querySelector("#i_nom_mars").value);
            valeur= (valeur/9.81)*1.2;
        document.getElementById("resultat").innerHTML=valeur;

    });
    
    document.getElementById("i_nom_neptune").addEventListener("keyup", function(){
            var valeur=parseInt(window.document.querySelector("#i_nom_neptune").value);
            valeur= (valeur/9.81)*1.2;
        document.getElementById("resultat").innerHTML=valeur;
   
    });
    
    document.getElementById("i_nom_saturne").addEventListener("keyup", function(){
            var valeur=parseInt(window.document.querySelector("#i_nom_saturne").value);
            valeur= (valeur/9.81)*1.2;
        document.getElementById("resultat").innerHTML=valeur;

    });
    
    document.getElementById("i_nom_terre").addEventListener("keyup", function(){
            var valeur=parseInt(window.document.querySelector("#i_nom_terre").value);
            valeur= (valeur/9.81)*1.2;
        document.getElementById("resultat").innerHTML=valeur;

    });
    
    document.getElementById("i_nom_uranus").addEventListener("keyup", function(){
            var valeur=parseInt(window.document.querySelector("#i_nom_uranus").value);
            valeur= (valeur/9.81)*1.2;
        document.getElementById("resultat").innerHTML=valeur;
  
    });
});

