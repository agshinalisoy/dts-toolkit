// ! Component Generator Class Area

class ComponentGen {
  static createDiv(id, className) {
    var div = document.createElement("div");
    div.classList.add(className);
    div.id = id;
    document.body.appendChild(div);
  }
  static createCustomText(content, id, className) {
    var text = document.createElement("p");
    text.classList.add(className);
    text.id = id;
    text.innerHTML = content;
    document.body.appendChild(text);
  }
  static createCustomHeading(content, id, className) {
    var heading = document.createElement("h1");
    heading.classList.add(className);
    heading.id = id;
    heading.innerHTML = content;
    document.body.appendChild(heading);
  }
  static createHeader(content, id, className) {
    var header = document.createElement("header");
    header.classList.add(className);
    header.id = id;
    header.innerHTML = content;
    document.body.appendChild(header);
  }
  static createNavbar(content, id, className) {
    var navbar = document.createElement("navbar");
    navbar.classList.add(className);
    navbar.id = id;
    navbar.innerHTML = content;
    document.body.appendChild(navbar);
  }
  static createFooter(content, id, className) {
    var footer = document.createElement("footer");
    footer.classList.add = className;
    footer.id = id;
    footer.innerHTML = content;
    document.body.appendChild(footer);
  }
}

// ! CSS Generator Class Area

class CSSGen {
  static setBackgroundColor(targetElement, color) {
    let target = document.getElementById(targetElement);
    target.style.backgroundColor = color;
  }
  static setBorder(targetElement, color, thickness, style) {
    let target = document.getElementById(targetElement);
    target.style.borderColor = color;
    target.style.borderWidth = thickness;
    target.style.borderStyle = style;
  }
  static setFont(targetElement, font, size) {
    let target = document.getElementById(targetElement);
    target.style.fontFamily = font;
    target.style.fontSize = size;
  }
  // TODO: Finish this Function.
  // static setGradient(targetElement, degree, color1, color2) {
  // let target = document.getElementById(targetElement);
  // target.style.backgroundImage = `linear-gradient(${degree}, ${color1}, ${color2};`;
  // }
  static setText(targetElement, alignment, decoration, spacing, height, color) {
    let target = document.getElementById(targetElement);
    target.style.textAlign = alignment;
    target.style.textDecoration = decoration;
    target.style.letterSpacing = spacing;
    target.style.lineHeight = height;
    target.style.color = color;
  }
  static setTextAlign(targetElement, alignment) {
    let target = document.getElementById(targetElement);
    target.style.textAlign = alignment;
  }
  static setTextDecoration(targetElement, decoration) {
    let target = document.getElementById(targetElement);
    target.style.textDecoration = decoration;
  }
  static setLetterSpacing(targetElement, spacing) {
    let target = document.getElementById(targetElement);
    target.style.letterSpacing = spacing;
  }
  static setLineHeight(targetElement, height) {
    let target = document.getElementById(targetElement);
    target.style.lineHeight = height;
  }
  static setTextColor(targetElement, color) {
    let target = document.getElementById(targetElement);
    target.style.color = color;
  }
  static setOpacity(targetElement, opacity) {
    let target = document.getElementById(targetElement);
    target.style.opacity = opacity;
  }
  static setPadding(targetElement, padding) {
    let target = document.getElementById(targetElement);
    target.style.padding = padding;
  }
  static setMargin(targetElement, margin) {
    let target = document.getElementById(targetElement);
    target.style.margin = margin;
  }
}

// ! Display Generator Class Area
class Display {
  static setGridDisplay(targetElement, row, column, gap, template) {
    let target = document.getElementById(targetElement);
    target.style.display = grid;
    target.style.gridRow = row;
    target.style.gridColumn = column;
    target.style.gridGap = gap;
    target.style.gridTemplate = template;
  }
  static setGrid(targetElement) {
    let target = document.getElementById(targetElement);
    target.style.display = "grid";
  }
  static setGridRow(targetElement, row) {
    let target = document.getElementById(targetElement);
    target.style.gridRow = row;
  }
  static setGridColumn(targetElement, column) {
    let target = document.getElementById(targetElement);
    target.style.gridColumn = column;
  }
  static setGridGap(targetElement, gap) {
    let target = document.getElementById(targetElement);
    target.style.gridGap = gap;
  }
  static setGridRow(targetElement, template) {
    let target = document.getElementById(targetElement);
    target.style.gridTemplate = template;
  }
  // TODO: Add Spacing value
  static setFlexDisplay(targetElement, direction, growth, wrap) {
    let target = document.getElementById(targetElement);
    target.style.display = flex;
    target.style.flexDirection = direction;
    target.style.flexGrowth = growth;
    target.style.flexWrap = wrap;
  }
  static setFlex(targetElement) {
    let target = document.getElementById(targetElement);
    target.style.display = "flex";
  }
  static setFlexDirection(targetElement, direction) {
    let target = document.getElementById(targetElement);
    target.style.flexDirection = direction;
  }
  static setFlexGrowth(targetElement, growth) {
    let target = document.getElementById(targetElement);
    target.style.flexGrowth = growth;
  }
  static setFlexWrap(targetElement, wrap) {
    let target = document.getElementById(targetElement);
    target.style.flexWrap = wrap;
  }
}
// ! TESTING AREA
ComponentGen.createCustomText("this is a text", "test", "test-class");
CSSGen.setOpacity("test", "1");
