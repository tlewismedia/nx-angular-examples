export function logFunc(name): any {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
      descriptor.value = function(...args) {
        console.log(`Input for ${name}: `);
        console.log( args );
        try {
          const result = original.apply(this, args);
          console.log(`Output from ${name}:`);
          console.log( result );
          return result;
        } catch (e) {
          console.log(`Error from ${name}: ${e}`);
          throw e;
        }
      }
    }
    return descriptor;
  };
}