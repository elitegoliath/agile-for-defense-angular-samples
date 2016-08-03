"use strict";
/**
 * This is a constant value, it cannot be modified. The objects
 * in the array can be modified though.
 *
 * @type {const Country[]}
 */
exports.COUNTRIES = [
    // Each one of these is a Country object. TypeScript can infer their type
    // from the Type annotation above.
    { id: 11, name: 'USA', description: 'Best country in the universe.' },
    { id: 12, name: 'India', description: 'Spicy food, and math.' },
    { id: 13, name: 'China', description: 'Cheaply made toys.' },
    { id: 14, name: 'United Kingdom', description: 'Tea, salty gamers.' },
    { id: 15, name: 'Australia', description: 'Everything wants you dead.' }
];
//# sourceMappingURL=mock-countries.js.map