let metodo= "GET";
const key = "d1cqgljduxZsqliIdjHxZ56LAk6A38fVWHjGPDuX";
var date;
let url = "https://api.nasa.gov/planetary/apod?api_key="+ key + "&date=";
var mode = true;
var date;

async function pegarData() {
    date = document.getElementById("data").value;
    console.log(date);
    request(metodo, url + date, mode)
    .then((data) => {
        console.log(data);
        update(data);
    }) 
}

function request(metodo, url, mode){
    return new Promise((resolve, reject) => {

        var req = new XMLHttpRequest()
        req.onreadystatechange = function(){
            if (req.readyState == 4 && req.status == 200){
                var data = JSON.parse(req.response);
                console.log(data);
                resolve(data);
            }
        }
        req.open(metodo, url, mode)
        req.send()
    })
    
}

function update(data){
    document.getElementById("titulo").innerHTML = data.title;
    document.getElementById("apod_img").src= data.url;
    document.getElementById("legenda").innerHTML = data.explanation;
    return data;
}