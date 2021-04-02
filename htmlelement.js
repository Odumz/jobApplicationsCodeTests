function HTMLElements(str) { 

    // code goes here  
    let openingTags = str.match(/<\w+>/g)
    let closingTags = str.match(/(<\/\w+>)/g).reverse();
    let newStr = [];
  
    for (const i in openingTags) {
      nestedCorrectly = false;
      for (const j in closingTags) {
        if (openingTags[i] === closingTags[j].replace("/", "")) {
          closingTags.splice(j, 1);
          nestedCorrectly = true;
        }
      }
  
      if (!nestedCorrectly) {
        newStr.push(openingTags[i].replace(/<|>/g, ''))
      }
    }
  
    lengthOfStr = newStr.length;
    return lengthOfStr > 0 ? newStr[0] : true;
  
  }

  function demo(str) {
      const res = HTMLElements(str);
      console.log(str, '\t--> ', res);
  }


demo("<div><div>abc</div><p>hola</p></div>");
demo("<div></div><b></b>");
demo("<div><div><b></b></div>/</p>");
demo("<div>abc</div><p><em><i>test test test</b></em></p>");