//  //   => is a shorthand function in js  ----eg----- .then(data => {...} --- data is the parameter and the {} id the functiom
// function loadPage(content_page_url) {
//     fetch(content_page_url)                        // Ask the browser to go get the HTML file we passed in at the link
//       .then(fetched_page => fetched_page.text())  // turns the new page file into text (HTML is text)

//       .then(page_content => {document.getElementById('banner-and-page').innerHTML = page_content;})  // the banner-and-page element gets injected with page_content

//       .catch(error => console.error('Error loading the HTML:', error)); // to auto catch errors
//   }

async function loadPage(content_page_url) {
  try {
    const fetched_page = await fetch(content_page_url); // BROWSER FETCHES NEW PAGE AND RETURNS A 'RESPONSE OBJECT' THAT HOLDS DATA ABOUT THE PAGE.
    const page_content = await fetched_page.text();     // RETRIEVES THE TEXT OF THE PAGE (THE HTML)
    document.getElementById('banner-and-page').innerHTML = page_content; // INJECTS THE NEW PAGE INTO THE DIV
}

  catch (error) {
    console.error('Error loading the page content:', error);
  }

}