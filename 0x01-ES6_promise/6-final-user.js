import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((results) => {
      const resultArr = results.map((result) => {
        if (result.status === 'fulfilled') {
          return { status: result.status, value: result.value };
        }
        return { status: result.status, reason: result.reason };
      });
      return resultArr;
    });
}
