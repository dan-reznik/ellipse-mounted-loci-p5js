function bary_X1116([a, b, c]) {
    const fn = (a, b, c) => {
        const a2 = a * a, b2 = b * b, c2 = c * c;
        const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
        return (b2 - c2) * (-2 * a4 * a4 + 5 * a4 * a2 * b2 - 3 * a4 * b4 - a2 * b4 * b2 +
            b4 * b4 + 5 * a4 * a2 * c2 - 8 * a4 * b2 * c2 + 4 * a2 * b4 * c2 -
            4 * b4 * b2 * c2 - 3 * a4 * c4 + 4 * a2 * b2 * c4 +
            6 * b4 * c4 - a2 * c4 * c2 - 4 * b2 * c4 * c2 + c4 * c4);
    };
    return [fn(a, b, c), fn(b, c, a), fn(c, a, b)];
}