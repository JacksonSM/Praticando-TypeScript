export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento)
                elemento = document.querySelector(seletor);
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
