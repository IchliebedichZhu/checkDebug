window.onerror = (event, source, line, column, error): void => {
  console.log('code error', {
    event,
    source,
    line,
    column,
    error,
  });
};
