## CSS POSTION

## 1.Static:

The static position is the default position for all elements. Elements with position static are not affected by top, bottom, left, or right properties. They are positioned according to the document.

....
.nav {
position: static;
}
....

## 2. Relative:

The relative position of the element are positioned relative to their normal position in the document flow. It allows you to adjust the position of the element using the top, bottom, left, and right properties.
....
.nav {
position: relative;
top: 10px;
left: 20px;
}
....

## 3. Absolute:

The element is positioned absolutely to its first positioned parent.
We can moved element and provide z-index. For example we position parent relative
and move child using absolute property
....
.nav {
position: absolute;
top: 10px;
left: 20px;
}
....

## 4. Fixed:

Elements with position: fixed are positioned relative to the viewport and do not move when the page is scrolled. It stays in the same position even if the page is scrolled up or down.
....
.nav {
position: fixed;
top: 10px;
left: 20px;
}
....

## 4. Sticky:

The element is positioned based on the user's scroll position.After element goes to scroll position it act as fixed and we give it using top,left,
right,bottom
....
.nav {
position: fixed;
top: 0px;

}
....
