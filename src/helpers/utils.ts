

export function injectJS(id: string, src: string) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve('js already injected');
      return;
    }
    const script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    script.addEventListener('load', resolve);
    script.addEventListener('error', () => reject('Error loading script.'));
    script.addEventListener('abort', () => reject('Script loading aborted.'));
    document.head.appendChild(script);
  });
}