# Space Converter

Space Converter is a powerful yet simple-to-use NPM module designed to convert points and dimensions between different spatial domains (Rects). It is particularly useful in scenarios where you need to map or transform points from one coordinate system to another, such as graphics rendering, game development, and data visualization.

## Installation

```bash
npm install space-converter
```

## Usage

```ts
import { Rect } from "space-converter";
import SpaceConverter from "space-converter";

const domain = new Rect(0, 0, 100, 100);
const range = new Rect(0, 0, 200, 200);

const converter = new SpaceConverter(domain, range);

const originalPoint = { x: 50, y: 50 };
const convertedPoint = converter.point(originalPoint);
// convertedPoint will be { x: 100, y: 100 }
```

## API

### `class SpaceConverter`

The main class that performs the conversion between two spatial domains.

#### `constructor(domain: Rect, range: Rect)`

Creates a new SpaceConverter. Both domain and range are instances of the `Rect` class.

#### `point(point: Point): Point`

Converts a point from the domain to the range.

#### `x(value: number): number`

Converts an x-coordinate value from the domain to the range.

#### `y(value: number): number`

Converts a y-coordinate value from the domain to the range.

#### `delta(pointDelta: Point): Point`

Converts a point delta (a change in position) from the domain to the range.

#### `dx(value: number): number`

Converts an x-coordinate delta from the domain to the range.

#### `dy(value: number): number`

Converts a y-coordinate delta from the domain to the range.

#### `invert(): SpaceConverter`

Returns a new SpaceConverter with the domain and range swapped.

### Helper Types and Classes

#### `class Rect`

A helper class that represents a rectangle defined by its top-left corner (x,y) and dimensions (width,height).

#### `type Span = [number, number]`

Represents a span or interval of numbers. It is an array of two numbers where the first number is the lower limit and the second number is the upper limit.

#### `type Point = { x: number; y: number; }`

Represents a point in 2D space with x and y coordinates.

## Examples

```ts
import { Rect } from "space-converter";
import SpaceConverter from "space-converter";

// Define the original and target coordinate systems
const domain = new Rect(0, 0, 100, 100);
const range = new Rect(0, 0, 200, 200);

// Create a converter
const converter = new SpaceConverter(domain, range);

// Define a point in the original coordinate system
const originalPoint = { x: 50, y: 50 };

// Convert the point to the target coordinate system
const convertedPoint = converter.point(originalPoint);

console.log(convertedPoint);
// Output: { x: 100, y: 100 }
```

## Testing

This module is just getting started and is not thoroughly tested.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need further guidance, please open an issue on our GitHub repository and we'll be happy to help.

We hope that you find `Space Converter` useful for your projects! Happy coding!
