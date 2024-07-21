function solvingQuadraticEquations(a, b, c) {
    //расчёт дискриминанта для определения количества корней уравнения
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        const rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);

        return [rootFirst, rootSecond];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);

        return [root];
    } else {
        return [0];
    }
};

/*
Алгоритм решения квадратного уравнения ax2 + bx + c = 0:
- вычислить значение дискриминанта по формуле D = b²−4ac;
- если дискриминант отрицательный, зафиксировать, что действительных корней нет;
- если дискриминант равен нулю, вычислить единственный корень уравнения по формуле х = −b/2a;
- если дискриминант положительный, найти два действительных корня квадратного уравнения по формуле корней x = (-b ± √ (b² - 4ac)) / 2a

Пример использования:
const roots = solvingQuadraticEquations(4, -4, 1);
console.log(roots);
*/

module.exports = { solvingQuadraticEquations };