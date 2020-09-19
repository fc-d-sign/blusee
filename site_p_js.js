/* hover para aparecer NAV e mostrar/ocultar contactos */
document.getElementById("contacts").onmouseover = 
    function(){
       document.getElementById("contacts_sec").style.display = "block";
       document.getElementById("li1").style.display = "block";
       document.getElementById("li2").style.display = "block";
       document.getElementById("li3").style.display = "block";
       document.getElementById("li4").style.display = "block";
};
document.getElementById("contacts").onmouseout = 
    function(){
       document.getElementById("contacts_sec").style.display = "none";
};





/* clicks para aparecer 4 grupos de conteúdo escondidos */
document.getElementById("li1").onclick = 
    function(){
       document.getElementById("bio").style.display = "block";
};
document.getElementById("li2").onclick = 
    function(){
       document.getElementById("soft").style.display = "block";
};
document.getElementById("li3").onclick = 
    function(){
       document.getElementById("pro").style.display = "block";
};
document.getElementById("li4").onclick = 
    function(){
       document.getElementById("id").style.display = "block";
};





var btext = false;
if (btext == true) {
    document.getElementById("textocell").style.display = "block";
    document.getElementById("textovox").style.display = "block";
    document.getElementById("textomf").style.display = "block";
    document.getElementById("textojap").style.display = "block";
    document.getElementById('orgalfig').play();
    document.getElementById('cannafig').play();
} else if (btext == false) {
    document.getElementById("textocell").style.display = "none";
    document.getElementById("textovox").style.display = "none";
    document.getElementById("textomf").style.display = "none";
    document.getElementById("textojap").style.display = "none";
    document.getElementById('orgalfig').pause();
    document.getElementById('cannafig').pause();
}





/*var M = document.getElementById("myMain");
var mDivs = M.getElementsByClassName("mDiv");
var mSecs = M.getElementsByTagName("section");

for (i = 0; i < mDivs.length; i++){
    mDivs[i].onmouseenter = function(){
        setTimeout(function(){
       mSecs[i].style.display = "block";
}, 500);};
    mDivs[i].onmouseleave = function(){
       mSecs[i].style.display = "block";
}}*/


/* mouseover e mouseout para ter acesso ao conteúdo */
/*biografia */
document.getElementById("bio").onmouseenter = 
    function() {
    setTimeout(function(){
       document.getElementById("bio_sec").style.cssText = "display:block;";
}, 500);};
document.getElementById("bio").onmouseleave = 
    function(){
       document.getElementById("bio_sec").style.display = "none";
};
/*softwares*/
document.getElementById("soft").onmouseenter = 
    function() {
    setTimeout(function(){
       document.getElementById("soft_sec").style.display = "block";
}, 500);};
document.getElementById("soft").onmouseleave = 
    function(){
       document.getElementById("soft_sec").style.display = "none";
};
/*projetos*/
document.getElementById("pro").onmouseenter = 
    function() {
    setTimeout(function(){
       document.getElementById("pro_list").style.display = "block";
}, 500);};
document.getElementById("pro").onmouseleave = 
    function(){
       document.getElementById("pro_list").style.display = "none";
};
/*cadastro*/
document.getElementById("id").onmouseenter = 
    function() {
    setTimeout(function(){
       document.getElementById("id_sec").style.display = "block";
}, 500);};
document.getElementById("id").onmouseleave = 
    function(){
       document.getElementById("id_sec").style.display = "none";
};





/* mouseover para ver projetos individuais escondidos */
document.getElementById("pro_list").onmouseover = 
    function(){
       document.getElementById("pro_imgs").style.display = "block";
};
document.getElementById("pro_list").onmouseout = 
    function(){
       document.getElementById("pro_imgs").style.display = "none";
};





/* mouseover no nome dos projetos para os mostrar */
/* cellphone symphony */
document.getElementById("cell_li").onmouseover = 
    function(){
       document.getElementById("cellfig").style.opacity = "1.0";
       document.getElementById("cell").style.cssText = "height:80vh;width:auto;background-color:#191970;z-index:16;";
};
document.getElementById("cell_li").onmouseout = 
    function(){
     document.getElementById("cellfig").style.opacity = "0.0";
     document.getElementById("cell").style.cssText = "none";
     document.getElementById("textocell").style.display = "none";
     btext = false;
        document.getElementById("textocell").style.display = "none";
};

/* japanese workshop */
document.getElementById("jap_li").onmouseover = 
    function(){
       document.getElementById("japfig").style.opacity = "1.0";
       document.getElementById("jap").style.cssText = "height:80vh;width:auto;background-color:#191970;z-index:16;";
};
document.getElementById("jap_li").onmouseout = 
    function(){
     document.getElementById("japfig").style.opacity = "0.0";
     document.getElementById("jap").style.cssText = "none";
     document.getElementById("textojap").style.display = "none";
    btext = false;
        document.getElementById("textojap").style.display = "none";
};

/* vox identity */
document.getElementById("vox_li").onmouseover = 
    function(){
       document.getElementById("voxfig").style.opacity = "1.0";
       document.getElementById("vox").style.cssText = "height:80vh;width:auto;background-color:#191970;z-index:16;";
};
document.getElementById("vox_li").onmouseout = 
    function(){
     document.getElementById("voxfig").style.opacity = "0.0";
     document.getElementById("vox").style.cssText = "none";
     document.getElementById("textovox").style.display = "none";
    btext = false;
        document.getElementById("textovox").style.display = "none";
};

/* mundo fantasma */
document.getElementById("mf_li").onmouseover = 
    function(){
       document.getElementById("mffig").style.opacity = "1.0";
       document.getElementById("mf").style.cssText = "height:80vh;width:auto;background-color:#191970;z-index:16;";
};
document.getElementById("mf_li").onmouseout = 
    function(){
       document.getElementById("mffig").style.opacity = "0.0";
       document.getElementById("mf").style.cssText = "none";
       document.getElementById("textomf").style.display = "none";
    btext = false;
        document.getElementById("textomf").style.display = "none";
};

/* cannativa */
document.getElementById("canna_li").onmouseover = 
    function(){
       document.getElementById("cannafig").style.opacity = "1.0";
       document.getElementById("canna").style.cssText = "height:60vh;width:auto;z-index:16;";
};
document.getElementById("canna_li").onmouseout = 
    function(){
       document.getElementById("cannafig").style.opacity = "0.0";
       document.getElementById("canna").style.cssText = "none";
       document.getElementById('cannafig').pause();
};

/* orgal */
document.getElementById("orgal_li").onmouseover = 
    function(){
       document.getElementById("orgalfig").style.opacity = "1.0";
       document.getElementById("orgal").style.cssText = "height:60vh; width:auto;z-index:16;";
};
document.getElementById("orgal_li").onmouseout = 
    function(){
       document.getElementById("orgalfig").style.opacity = "0.0";
       document.getElementById("orgal").style.cssText = "none";
       document.getElementById('orgalfig').pause();
};






/* click para mostrar/esconder textos */
/* cellphonesymphony */
/*var btext = false;
var projectsList = document.getElementById("pro_list");
var listedProjects = projectsList.getElementsByTagName("li");
var projectsImgs = document.getElementById("pro_imgs");
var projectsPs = projectsImgs.getElementsByTagName("p");
//textocell == false;
if (btext == true) {
    projectsPs[i].style.display = "block";
} else if (btext == false) {
    projectsPs[i].style.display = "none";
}

for (i = 0; i < listedProjects.length; i++) {
    listedProjects.onclick = function(){
    if(btext == false){
        btext = true;
        projectsPs[i].style.display = "block";
    } else {
        btext = false;
        projectsPs[i].style.display = "none";
    }
}};
*/




/* clicks para ver parágrafos - modo trabalhoso */
document.getElementById("cell_li").onclick = function(){
    if(btext == false){
        btext = true;
        document.getElementById("textocell").style.display = "block";
    } else {
        btext = false;
        document.getElementById("textocell").style.display = "none";
    }
}
document.getElementById("vox_li").onclick = function(){
    if(btext == false){
        btext = true;
        document.getElementById("textovox").style.display = "block";
    } else {
        btext = false;
        document.getElementById("textovox").style.display = "none";
    }
}
document.getElementById("mf_li").onclick = function(){
    if(btext == false){
        btext = true;
        document.getElementById("textomf").style.display = "block";
    } else {
        btext = false;
        document.getElementById("textomf").style.display = "none";
    }
}
document.getElementById("jap_li").onclick = function(){
    if(btext == false){
        btext = true;
        document.getElementById("textojap").style.display = "block";
    } else {
        btext = false;
        document.getElementById("textojap").style.display = "none";
    }
}
document.getElementById("canna_li").onclick = function(){
    if(btext == false){
        btext = true;
        document.getElementById('cannafig').play();
    } else {
        btext = false;
        document.getElementById('cannafig').pause();
    }
}
document.getElementById("orgal_li").onclick = function(){
    if(btext == false){
        btext = true;
        document.getElementById('orgalfig').play();
    } else {
        btext = false;
        document.getElementById('orgalfig').pause();
    }
}




/* versao mobile - lista e projetos */
var w = window.innerWidth;
if(w <= 1100) {

       document.getElementById("cell_li").onclick = 
    function(){
       document.getElementById("cellfig").style.opacity = "1.0";
       document.getElementById("cell").style.cssText = "height:60vh;width:auto;background-color:#191970;z-index:16;";
};

/* japanese workshop */
document.getElementById("jap_li").onclick = 
    function(){
       document.getElementById("japfig").style.opacity = "1.0";
       document.getElementById("jap").style.cssText = "height:60vh;width:auto;background-color:#191970;z-index:16;";
};

/* vox identity */
document.getElementById("vox_li").onclick = 
    function(){
       document.getElementById("voxfig").style.opacity = "1.0";
       document.getElementById("vox").style.cssText = "height:67.5vw;width:90vw;background-color:#191970;z-index:16;";
};

/* mundo fantasma */
document.getElementById("mf_li").onclick = 
    function(){
       document.getElementById("mffig").style.opacity = "1.0";
       document.getElementById("mf").style.cssText = "height:67.5vw;width:90vw;background-color:#191970;z-index:16;";
};

/* cannativa */
document.getElementById("canna_li").onclick = 
    function(){
       document.getElementById("cannafig").style.opacity = "1.0";
       document.getElementById("canna").style.cssText = "height:51vw;width:90vw;z-index:16;";
};

/* orgal */
document.getElementById("orgal_li").onclick = 
    function(){
       document.getElementById("orgalfig").style.opacity = "1.0";
       document.getElementById("orgal").style.cssText = "height:51vw;width:90vw;z-index:16;";
};
    
document.getElementById("contacts").ontouch = 
    function(){
    setTimeout( function(){
       document.getElementById("contacts_sec").style.display = "block";
}, 500);};
    
};