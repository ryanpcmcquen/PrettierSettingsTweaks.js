window.addEventListener('load', () => {
    'use strict';
    document.querySelector(
        '[title="Number of spaces per indentation level."] input'
    ).value = 4;
    document.querySelector(
        '[title="Use single quotes instead of double quotes."] input'
    ).checked = true;
    document.querySelector(
        '[title="Include parentheses around a sole arrow function parameter."] select'
    ).value =
        'always';
});
