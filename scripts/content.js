const band = document.getElementsByClassName("band")[0];

// get spans containing links
const bandSpans = band.getElementsByTagName("span");

for (const span of bandSpans) {
  span.style = `
        border-color: black;
        border-width: thin;
        border-style: solid;
        border-radius: 5px;
        padding: 1px;
  `;
}

// move spans to be direct children of band
band.append(...bandSpans);

// remove "Izdvojeno" box
document.getElementsByTagName("h2")[0].remove();

// remove h4 containing old parent of spans
document.getElementsByTagName("h4")[0].remove();

// remove div which I don't know the purpose of
document.getElementsByClassName("clearfix")[0].remove();
