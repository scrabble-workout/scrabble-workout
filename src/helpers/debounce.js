const debounce = (func, delay) => {
    let inDebounce;
    /* eslint-disable func-names */
    return function () {
        const context = this;
        /* eslint-disable prefer-rest-params */
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
};

export { debounce };
