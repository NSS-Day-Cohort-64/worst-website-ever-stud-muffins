import { locations } from "./database.js"

const locationDatabase = locations()

//

export const locationList = () => {
    let locationsHTML = "<h2>Locations that Big Foot has defernately been spotedd.</h2>"

    for (const location of locationDatabase) {
        locationsHTML += `<div id="card" class="Jonathan class="card">
        <div class="content">
          <image class="image" src="${location.image}">
              <p class="words">${location.location}</p>
        </div>
      </div>
        `
    }

    locationsHTML += "<p>Each picture is worth a thousand words, and my words after are worth extra words<p>"

    return locationsHTML
}


// <div id="card" class="card">
//   <div class="content">
//     <image src="${location.image}">
//         <p>${location.location}</p>
//   </div>
// </div>


// <div class="card"><img src=${location.image}>
//         <div class="words"><p>${location.location}</p>
//         </div>
//         </div>