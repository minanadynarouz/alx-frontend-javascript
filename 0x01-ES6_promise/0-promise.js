// eslint-disable-next-line
function getResponseFromAPI() {
  return new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });
}
