// from data.js
var tableData = data;

// YOUR CODE HERE!
// tbody selection  
tbody = d3.select("tbody")

// using Object.entries to get key value pairs for my table to be looped and added to HTML table
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// date filter based on user input
function clickSelect(){
    //page refresh block
    d3.event.preventDefault();
    //display/print input value
    console.log(dateInputText.property("value"));
    //create table based on fildered data from search
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //show new table
    displayData(new_table);
}

// event listener for handling clicks and changes
dateInputText.on("change", clickSelect)