
// https://exercism.org/api/v2/tracks

let dataDiv = document.getElementById('data');

console.log("trying to consume API : https://exercism.org/api/v2/tracks");

let api = "https://exercism.org/api/v2/tracks";
function displayData(data){

    console.log(data);
    console.log("------------1-----------------");
    console.log(data['tracks']);
    console.log("-------------2----------------");
    console.log(data['tracks'][0]);
    console.log("--------------3---------------");
    for(var i=0;i<5;i++){
        console.log(data['tracks'][i]);
    }
    console.log("---------------4--------------");
    console.log(data['tracks'][0]['slug']);
    console.log("----------------5-------------");
    console.log(data['tracks'][0]['tags']);
    console.log(data['tracks'][0]['slug']);
    console.log(data['tracks'][0]['title']);
    console.log(data['tracks'][0]['course']);
    console.log(data['tracks'][0]['web_url']);
    console.log(data['tracks'][0]['num_concepts']);
    console.log(data['tracks'][0]['num_exercises']);
    console.log("-----------------6------------");
    for(let k in data['tracks'][0]){
        if(typeof data['tracks'][0][k] === "object"){
            console.log("(______________________________________)");
            // console.log("./././././ key : "+k+" is an object");
            for(let l in data['tracks'][0][k]){
                console.log(l+" : "+data['tracks'][0][k][l]);
            }
            // console.log("(______________________________________)");

        }
        else{
            console.log(k+" : "+data['tracks'][0][k])
            // console.log("key : "+k);
            // console.log("-> data : "+data['tracks'][0][k]);
        }
    
    }
    doThis()
    // renderingData(data);
    // renderingData_2(data);
    renderingData_3(data);
    return;
}

fetch(api)
    .then(response=>response.json())
    .then(
        data=>displayData(data)
        );

/*
fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => console.log(data));
*/



function doThis(){
    console.log("\n\n\n done running DisplayData\n\n\n");
}

function renderingData(data){
        // running as a sample test run only the first row .... data['tracks'][0]
        let row = document.createElement('div');
        for(let k in data['tracks'][0]){
            let cell = document.createElement('div');
            if(typeof data['tracks'][0][k] === "object"){
                cell.textContent = "OBJECT skipped for now";
                console.log("(_________________object skipped for now_____________________)");
                for(let l in data['tracks'][0][k]){
                    console.log(l+" : "+data['tracks'][0][k][l]);
                }
            }
            else{
                cell.textContent = data['tracks'][0][k];
                console.log("appended -> "+k+" : "+data['tracks'][0][k]);
            }

            cell.className = 'cell';
            row.appendChild(cell);

        }
        dataDiv.appendChild(row);
}



function renderingData_2(data){
    let dataDiv2 = document.getElementById('data2');

    console.log("render2");
    // running as a sample test run only the first row .... data['tracks'][0]
    let sample = data['tracks'][0];
    let row = document.createElement('div');
    for(let i in sample){
        let div_i = document.createElement('div');
        div_i.textContent = i;
        div_i.textContent += `-> ${sample[i]}`;
        row.append(div_i);
    }
    dataDiv2.append(row);
}

function renderingData_3(data){
    let titleList = ['icon','title','link','exercises','atgs'];
    console.log("render3");
    // for(let i=0;i<data['tracks'].length;i++){
    //     console.log(i+" - - - - - - - - "+data.tracks[i]);
    // }
    let dataDiv3 = document.getElementById('data3');
    let titleRow = document.createElement('div');
    titleRow.className = "row";

    for(let i=0;i<5;i++){
        let titleRowCell = document.createElement('div');
        // titleRowCell.textContent += `title:${i+1}`;
        titleRowCell.textContent += titleList[i];
        titleRow.append(titleRowCell);
    }

    dataDiv3.append(titleRow);
    // title row appended 

    // for(let i=0;i<5;i++){
    for(let i=0;i<data.tracks.length;i++){
        let row_i = document.createElement('div');
        row_i.className = 'row';
        console.log("- - - - - - - - running for "+i+" - - - - - - - -");
        let j = data.tracks[i];

        // instead of iterating -- access each object

        // first icon
        console.log("icon url -> "+j['icon_url']); 
        let icon = document.createElement('img');
        row_i.append(icon);
        icon.src = j['icon_url'];
        // icon.height = "40";
        // icon.width = "40";
        // course
        console.log(j['title']); 
        let course = document.createElement('div');
        course.textContent= j['title'];
        row_i.append(course);
        // web_url
        console.log(j['web_url']); 
        let web_url = document.createElement('a');
        web_url.textContent = "Click Here";
        web_url.href = j['web_url'];
        web_url.target = "_blank";
        row_i.append(web_url);
        // num_exercises
        console.log(j['num_exercises']); 
        let num_exercises = document.createElement('div');
        num_exercises.textContent = j['num_exercises'];
        row_i.append(num_exercises);
        // tags
        console.log(j['tags']); 
        let tags = document.createElement('div');
        tags.textContent = j['tags'];
        row_i.append(tags);

        console.log(j['slug']); 
        console.log(j['num_concepts']); 
        dataDiv3.append(row_i);
    }
}

/*
function renderingData_4(data){
    console.log("render 4 running");
    // running as a sample test run only the first row .... data['tracks'][0]
    let row = document.createElement('div');

}

*/