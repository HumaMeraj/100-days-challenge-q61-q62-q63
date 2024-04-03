//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles

type Shape = {
    kind: "Circle" | "rectangle";
    radius?: number;             // only for circle
    width?: number;              // only for rectangle
    height?: number;             // only for rectangle
};
// Describing a circle using our Shape type
let circle: Shape ={
    kind:"Circle",
    radius:5
};
// Describing a rectangle using our Shape type
let rectangle: Shape ={
    kind:"rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle);
console.log(rectangle);


// We made a flexible program that can describe different shapes in detail.















