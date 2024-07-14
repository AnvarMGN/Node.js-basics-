# Function for solving quadratic equations.

This function is allowed to solve equations of the form: ax2 + bx + c = 0.

## Usage example.

The parameters a, b, c must be passed to the function.

const roots = solvingQuadraticEquations(4, -4, 1);

console.log(roots);

The function returns an array with the roots of the equation.
Depending on the discriminant calculated inside the function, the answer options may be as follows:
- [ x1, x2 ];
- [ x1 ];
- [ 0 ].