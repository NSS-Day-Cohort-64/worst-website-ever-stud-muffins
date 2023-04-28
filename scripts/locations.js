import { locations } from "./database.js"

const locationDatabase = locations()

//

export const locationList = () => {
    let locationsHTML = "<h3>Locations that Big Foot has defernately been spotedd.</h3>"

    for (const location of locationDatabase) {
        locationsHTML += `<div id="Jonathan-card" class="Jonathan class="Jonathan-card">
        <div class="Jonathan-content">
          <image class="Jonathan-image" src="${location.image}">
              <p class="Jonathan-words">${location.location}</p>
        </div>
      </div>
        `
    }

    locationsHTML += "<p>Each picture is worth a thousand words, and my words after are worth extra words<p>"

    return locationsHTML
}