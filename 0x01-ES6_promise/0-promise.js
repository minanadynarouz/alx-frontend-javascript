// eslint-disable-next-line
function getResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      res('Success');
    }
    rej(Error('Error'));
  });
}

export default getResponseFromAPI;
