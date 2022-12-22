let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("list-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderItems(myLeads)
}

// Function to print all elements
function renderItems(array) {
    // first saving the latest items in the local storage
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))

    let listItems = ""
    for (let i = 0; i < array.length; i++) {
        // ulEl.innerHTML += "<li>" + array[i] + "</li>"
        
        // const li = document.createElement("li")
        // li.textContent = array[i]
        // ulEl.append(li)

        // listItems += "<li>" + array[i] + "</li>"
        // listItems += "<li><a href = " + array[i] + " target = '_blank'>" + array[i] + "</a></li>"
        listItems += `<li>
            <a href = '${array[i]}' target = '_blank'>
                ${array[i]}
            </a>
        </li>`


    }

    ulEl.innerHTML = listItems

}

// leadsEl.textContent = "Mohit"

let inputBtn = document.getElementById("input-btn")

// Storing the data in the local storage
// localStorage.setItem

// to take input from the input and save it in local storagr and show them
inputBtn.addEventListener("click", function () {
    // myLeads.push(inputEl.value)
    let val = inputEl.value
    if (val) {
        myLeads.push(val)
        // ulEl.textContent = inputEl.value

        // cleaing the input field
        clearInput()

        // Saving the myLeads to localStorage
        // myLeads = JSON.stringify(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        // myLeads = JSON.parse(myLeads)

        // displaying items
        renderItems(myLeads)
    }
     
    }
)


inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        // document.getElementById("input-btn").click()
        inputBtn.click()
    }
})



// function to clear the input taken before and saved
function clearInput() {
    inputEl.value = ""
}


// function to clear localStorage
clearBtn = document.getElementById("clr-btn")
clearBtn.addEventListener('dblclick', function () {
    localStorage.clear()
    myLeads = []
    renderItems(myLeads)
})

// const tabs = [
//     {url: "https://www.linkedin.com"}
// ]


tabBtn = document.getElementById("tab-btn")
tabBtn.addEventListener('click', function () {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        
    // console.log(tabs[0].url);
        
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderItems(myLeads)
        
        
    });
    
    
})

// function save() {
//     console.log("ButtonClicked!!!")
// }