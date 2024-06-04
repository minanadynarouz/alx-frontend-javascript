import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, LastName, fileName) {
  const promises = [signUpUser(firstName, LastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        [
          {
            status: result.status,
            value: result.value
          }
        ]
      })
    })
}
