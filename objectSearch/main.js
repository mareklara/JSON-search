const search = document.getElementById("search");
const button = document.getElementById("btn");


const fetchData = async () =>{
    try{
        const res = await fetch("profiles.json")
        const data = await res.json()
        button.addEventListener("click", () =>{
            const inputValue = search.value;
            const element = data.find(item => item.name === inputValue);

            if(element){
                const displayInfo = document.getElementById("display-info")
                const paragraph = document.createElement("p")
                paragraph.classList.add("paragraph")
                // displayInfo.innerHTML = ""
                displayInfo.appendChild(paragraph)
                paragraph.innerText = `Name: ${element.name} 
                                        Last Name: ${element.lastName}
                                        Height: ${element.height}
                                        Country: ${element.country}` 

            } else if (element != inputValue){
                console.log("Not Matching found")
            }

            search.value = ""

        });  
    }catch(error){
        console.log()
    }

}
fetchData()
