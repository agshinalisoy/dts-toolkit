# "DTS Toolkit" - BETA

"Developers Time Saver Toolkit" is a library for creating visuals in javascript easily. We have used simple javascript DOM functions to create simple functions with configuration of CSS properties. Its easy to create components and style them using Javascript.

Now we are releasing the beta version and we are open to developer reviews and feature requests. We intent to improve the library for easier project creations.

## Manual

We have 3 different classes: "ComponentGen" for component generation, "CSSGen" for CSS generation and "Display" for setting display modes: flex and grid.

All of the parameters are accepting strings. We have added a note to show if a parameter can accept arrays.

### ComponentGen Class

- **createDiv("id", "className", "appendElement")** - for creating divisions ("appendElement" is an array for the elements to be appended in created Div)
- **createCustomText("content", "id", "className")** - for creating paragraphs with custom "content".
- **createCustomHeading("content", "id", "className")** - for creating h1's with custom "content".
- **createHeader("id", "className", "appendElement")** - for creating headers.
- **createNavbar("content", " id", "className")** - for creating navbars - still in progress
- **createFooter("content", "id", "className")** - for creating footers- still in progress

### CSSGen Class

_*targetElement is "id" of the targeted element*_

- **setBackgroundColor("targetElement", "color")** - for setting background colors.
- **setBorder("targetElement", "color", "thickness", "style")** - for setting borders.
- **setFont("targetElement", "font-family", "font-size")** - for setting font properties.
- **setText("targetElement", "alignment", "decoration", "spacing", "height", "color")** - for setting text properties
- **setTextAlign("targetElement", "alignment")** - for setting text alignment.
- **setTextDecoration("targetElement", "decoration")** - for setting text decoration.
- **setLetterSpacing("targetElement", "spacing")** - for setting letter spacing.
- **setLineHeight("targetElement", "height")** - for setting line height.
- **setTextColor("targetElement", "color")** - for setting text color.
- **setOpacity("targetElement", "opacity")** - for setting opacity.
- **setPadding("targetElement", "padding")** - for setting padding.
- **setMargin("targetElement", "margin")** - for setting margin.
- **setGradientBackground("targetElement", "angle", "colors")** - for setting gradient background (enter an array of colors for colors variable)
- **setShadow("targetElement", "type", "config", "color")** - for setting shadows.
  - enter one of the keywords("inner", "box", "text") for selecting the type of shadow in the type variable.
  - enter the configuration for shadows in CSS order (x, y, blur) as an array in config variable.
  - enter a color for shadows in color variable (only one color is accepted yet.)
- **setLongShadow("targetElement","style", color, length)** - for setting long shadows with given length.
  - for style variable choose either "box" or "text".

### Display Class

- **setGridDisplay("targetElement", "row", "column", "gap")** - shorthand for setting grid.
- **setGrid("targetElement")** - equivalent for display: grid.
- **setGridRow("targetElement", "row")** - for setting rows.
- **setGridColumn("targetElement", "column")** - for setting columns.
- **setGridGap("targetElement", "gap")** - for setting grid gaps.
- **setFlexDisplay("targetElement", "direction", "growth", "wrap")** - shorthand for setting flex.
- **setFlex("targetElement")** - equivalent for display: flex.
- **setFlexDirection("targetElement", "direction")** - for setting flex direction.
- **setFlexGrowth("targetElement", "growth")** - for setting flex growth. (Will be modified with negative numbers to show shrinking)
- **setFlexWrap("targetElement", "wrap")** - for setting wrapping.
- **setFlexCenter("targetElement")** - for centering the targeted flex container.

### Helping functions

- **appendItems("parent", "childs")** - for appending elements. ("childs" variable can contain an array of elements or single item.

*More will be added in the future*
