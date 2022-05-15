
document.body.innerHTML=
`

<div class="container" id="container-country">
<div class="CompleteHeading"><h1>Know How Many People With Your Name</h1></div>

<div class="completedom">
<div class="vertical">
<div class="name">
    <label for="text" id="Namelabel">Name</label>
    <input type="text" id="nameinput" placeholder="Click to get Data">
</div>
<div class="cardsdisplay" id="cardsdata"></div>
</div>
</div>
</div>
`

//displaying country ID, probability, name of person
let countries
let displayCountry=(obj)=>{
    cards.innerHTML+=`
    <div class="main-container">
        <p>Name:<span>${countries.name}</span></p>
        <p>Country ID:<span>${obj.country_id}</span></p>
        <p>Probability<span>${obj.probability}</span></p>
    </div>
    `  
}

//Searching the name by clicking on Name label
const namelabel=document.querySelector("#nameinput")
let cards=document.querySelector("#cardsdata")
namelabel.addEventListener('keyup', (event)=>{
    const keypressed=event.key
    if(keypressed=="Enter"){
        //Acessing the getData function
        getData() 
    }
})


//getting the data from nationalize api

const getData=async()=>{
    //Fetch the data from api
    try{
        const data=await fetch("https://api.nationalize.io/?name="+namelabel.value)
        countries=await data.json();
        cards.innerHTML="";
        console.log(cards.innerHTML)
        countries.country.map((countrykey) => {

            //accessing dispalyCountry function
                displayCountry(countrykey)
            
        });
        
    }
catch (error) {
    cards.innerHTML = "Input is " + error
}


    
}


    

