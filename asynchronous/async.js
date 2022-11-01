function userCredentialRepo(username, cb) {
    let users = []
    setTimeout(() => {
        users = [
            {
                userName: 'Jution',
                password: '1234'
            },
            {
                userName: 'Fadli',
                password: '4321'
            }
        ];
        const user = users.find((u) => u.userName === username);
        if(!user) {
            cb(`user tidak diremukan`, null);
        } else {
            cb(null, user)
        }
    }, 1000);
}
const response = (err, success) => err ? console.log('ERROR:',err) : console.log('SUCCESS:', success);
const users = ['Jution', 'Fadli', 'Jhon'];
// userCredentialRepo(users[2], (err, success) => {
//     response(err, success);
// });
// Bad
// userCredentialRepo(users[1], (err, success) => {
//     response(err, success);
// });
// userCredentialRepo(users[0], (err, success) => {
//     response(err, success);
// });

// Good
// userCredentialRepo(users[2], (err, success) => {
//     response(err, success);
//     userCredentialRepo(users[1], (err, success) => {
//         response(err, success);
//         userCredentialRepo(users[0], (err, success) => {
//             response(err, success);
//         });
//     });
// });

// Promise
const userCredentialRepoPromise = (userName, resolve, reject) => {
    userCredentialRepo(userName, (err, success) => {
        if (err) reject(err);
        else resolve(success)
    });
}

// promise: resolve, reject
// ciri khas promise itu selalu ada keyword then (success) & catch (error)
const getUser = new Promise((resolve, reject) => {
    userCredentialRepoPromise(users[0], resolve, reject);
    userCredentialRepoPromise(users[1], resolve, reject);
});
//
// // Manggilnya
getUser.then((result) => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

// Promise ALL
// const getUser = (username) => {
//     return new Promise((resolve, reject) => {
//         userCredentialRepoPromise(username, resolve, reject);
//     });
// };

// Promise.all([
//     getUser('Fadli'),
//     getUser('Jution'),
//     // getUser('xxxx'),
// ]).then((users) => {
//     for (const user of users ) {
//         console.log(user)
//     }
// }).catch(error => console.log(error))

// Async - Await
// const getUser = (username) => {
//     return new Promise((resolve, reject) => {
//         userCredentialRepo(username, (resolve, reject));
//     });
// };
//
// const listOfUser = async () => {
//     try {
//         const user01 = await getUser(users[0]);
//         const user02 = await getUser(users[1]);
//         const userXX = await getUser(users[2]);
//         console.log(user01);
//         console.log(user02);
//
//         console.log(userXX);
//     } catch (err) {
//         console.log(err)
//     }
// }

// listOfUser();
