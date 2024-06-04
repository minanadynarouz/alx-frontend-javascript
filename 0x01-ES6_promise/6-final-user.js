import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          console.log({
            status: result.status,
            value: result.value,
          });
        } else {
          console.log({
            status: result.status,
            reason: result.reason,
          });
        }
      });
    });
}
