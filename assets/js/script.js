//loading movies data
window.onload = function(){
    for (var i=0 ; i < movies_array.length ; i++)
    {    
        line.push(movies_array[i]);  
        var ulRow = document.createElement("ul");
        for(var j in line[line.length-1]){
            var liData = document.createElement('li');
            liData.textContent = (line[line.length-1][j]);
            ulRow.appendChild(liData);
        }
        var l = document.querySelector('.movies_list');
        l.appendChild(ulRow);                  
    } 
};

//search movies
document.getElementById("submit").addEventListener("click",find);

//movies data
var movies_array = [
    {name:'GRAVE OF THE FIREFLIES',release_date:1988,actor_name:'TSUTOMU TATSUMI',producer_name:'ISAO TAKAHATA'},
    {name:'THE LION KING',release_date:1994,actor_name:'MATTHEW BRODERICK',producer_name:'ROGER ALLERS'},
    {name:'BEAUTY AND THE BEAST',release_date:1991,actor_name:'ROBBY BENSON',producer_name:'GARY TROUSDALE'},
    {name:'SLEEPING BEAUTY',release_date:1959,actor_name:'MARY COSTA',producer_name:'LES CLARK'},
    {name:'TOY STORY 3',release_date:2010,actor_name:'TOM HANKS',producer_name:'LEE UNKRICH'},
    {name:'AKIRA',release_date:1988,actor_name:'MAMI KOYAMA',producer_name:'KATSUHIRO'},
    {name:'PRINCESS MONONOKE',release_date:1997,actor_name:'BILLY CRUDUP',producer_name:'HAYAO MIYAZAKI'},
    {name:'MILLENNIUM ACTRESS',release_date:2001,actor_name:'MAMI KOYAMA',producer_name:'SATOSHI KON'},
    {name:'TOY STORY',release_date:1995,actor_name:'TOM HANKS',producer_name:'JOHN LASSETER'},
    {name:'THE INCREDIBLES',release_date:2004,actor_name:'JASON LEE',producer_name:'BRAD BIRD'}
];

var line = [];
var m = document.querySelector('#result');
function find(){
    line.length = 0;  
    var search_movie = document.getElementById("mname").value;
    if (search_movie == ''){
        alert("Search Movie");
    }
    else{
        var search = search_movie.toUpperCase();
        for (var i=0 ; i < movies_array.length ; i++)
        {
            if (movies_array[i]["name"].includes(search) || movies_array[i]["actor_name"].includes(search)) {
                line.push(movies_array[i]);            
                var ulRow = document.createElement("ul");
                for(var j in line[line.length-1]){
                    var liData = document.createElement('li');
                    liData.textContent = (line[line.length-1][j]);
                    ulRow.appendChild(liData);
                }
                m.appendChild(ulRow); 
            }    
        }
        if(line.length == 0){
            alert("not found");
        }
    }
    document.getElementById('mname').value = '';  
}

//reset search
document.getElementById("cancel").addEventListener("click", function(){
    document.getElementById('mname').value = '';
    var Ulexits = document.querySelectorAll('#result ul');
    ulArray = Array.from(Ulexits);
    ulArray.forEach(function(element) {
        element.remove();
    });
});