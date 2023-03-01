const band = document.getElementsByClassName("band")[0];

// get spans containing links
const bandSpans = band.getElementsByTagName("span");

for (const span of bandSpans) {
  span.classList.add("link-holder");
  if (span.innerText.includes("LIVE")) {
    // add special class to the link itself
    const child = span.children[0];
    console.assert(child.tagName === "A");
    child.classList.add("live-link");
  }
}

// move spans to be direct children of band
band.append(...bandSpans);

// remove "Izdvojeno" box
document.getElementsByTagName("h2")[0].remove();

// remove h4 containing old parent of spans
document.getElementsByTagName("h4")[0].remove();

// remove div which I don't know the purpose of
document.getElementsByClassName("clearfix")[0].remove();
