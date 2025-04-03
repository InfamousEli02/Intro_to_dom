
//getElementById exercise
document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    console.log(title);


//querySelector exercise
    const possiblePtag = "p#paragraph2"
    const pTag = document.querySelector("p");
    const pTag2 = document.querySelector("p#paragraph2");
    const pTag3 = document.querySelector("p#paragraph3");
    const foundPtag = document.querySelector("possiblePtag");

    console.log(pTag);
    console.log(pTag2);
    console.log(pTag3);
    console.log(foundPtag);

//querySelectorAll exercise
    const h2Tags = document.querySelectorAll("h2.subtitle");

    console.log(h2Tags);

//innerText
    const h2Tag = document.getElementById("another");

    h2Tag.innerText = "DJ Khalid says.."

    h2Tag.innerHTML = "<span>Hello Span</span>"

    const phrase = document.querySelector("p#phrase");
    phrase.innerHTML = "Plus Ultra!";
    console.log(phrase.innerHTML);
    
//modify CSS properties
//fontSize(css) == fontSize(js)
    h2Tag.style.backgroundColor = "green";
    h2Tag.style.fontSize = "40px";
    console.log(h2Tag.style)

    const image = document.getElementById("image");

    image.src = 'https://www.looper.com/img/gallery/what-does-deku-mean-the-name-of-my-hero-academias-main-character-explained/intro-1728921238.jpg';

//newElement()
   const newH1El = document.createElement("container");
   newH1El.innerText = "Hello new hero";

   console.log(newH1El);

   document.body.append(newH1El);

   const div = document.createElement("div");
//the p element will be appended inside of the div
   const p = document.createElement("p");
   p.innerText = "I am the text of the p tag!"
   div.append(p);

   document.body.append(div);
   div.innterText = "Hello World";
})