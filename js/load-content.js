 //   => is a shorthand function in js  ----eg----- .then(data => {...} --- data is the parameter and the {} id the functiom
function loadPage(pageUrl) {
    fetch(pageUrl)                        // Ask the browser to go get the HTML file we passed in at the link
      .then(response => response.text())  // turns the new page file into text (HTML is text)

      .then(newPageData => {document.getElementById('banner-and-page').innerHTML = newPageData;})  // the banner-and-page element gets injected with newPageData

      .catch(error => console.error('Error loading the HTML:', error)); // to auto catch errors
  }

  