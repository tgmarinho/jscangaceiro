export function debounce(millissegundos = 500) {
    return function(target, key, descriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;
        descriptor.value = function(...args) {

            if (event) event.preventDefault();

            clearTimeout(timer);
            // chama metodoOriginal depois de x milisegundos!
            timer = setTimeout(() => metodoOriginal.apply(this, args), millissegundos);
        }

        return descriptor;
    }
}