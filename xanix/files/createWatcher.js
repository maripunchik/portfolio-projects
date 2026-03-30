export default function createWatcher(selector, callback, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  elements.forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry, el, observer);
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px",
      },
    );

    observer.observe(el);
  });
}
