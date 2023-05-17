function search() {
    let { value } = document.getElementById("searchInput")

    const baseUrl = "https://google.com/search?q="
    
    if(!value) value = "dea afrizal" 
    location.replace(baseUrl + value)
}

function luck() {
    location.replace("https://www.google.com/doodles");
}
