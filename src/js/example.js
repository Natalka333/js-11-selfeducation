//****ЗАПРОС */

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));
// Change this number to fetch different post
// const postId = 1;



// ***ЗАПРОС ПО ID***

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

// ***СОЗДАНИЕ НОВІХ ДАННІХ****

// const newPost = {
//     "userId": 1,
//     "title": "loren ipsum",
//     "body": "Hello"
// };


// function addPost(post) {
//     const option = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//     }
//     return fetch('https://jsonplaceholder.typicode.com/posts', option).then(response => response.json());
// }


// addPost(newPost).then(renderPost).catch(error => console.log(error));

// function renderPost(post) {
//     console.log('Пришел ответ от бекенда можно рисовать');
//     console.log(post);
// }




// ****UPDATE*****

// function updatePostById(update, postId) {
//     const option = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(update),
//     }
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, option).then(response => response.json());
// }

// updatePostById({ body: "Hello my cool Nataly!" }, 1);
// updatePostById({ title: 'See you my dear!' }, 2);
// updatePostById({ body: 'Good buy', title: 'I will be back!' }, 3);

// ***** DELITE****

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//     method: "DELETE",
// })
//     .then(() => console.log("Post deleted"))
//     .catch(error => console.log("Error:", error));

// ** ИЛИ ТАК УДАЛИТЬ**

// function removePost(postId) {
//     const options = {
//         metod: 'DELETE',
//     }
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, options)
//     .then(response => response.json());
// }

// removePost(1)



// ***АСИНХРОННІЕ ЗАПРОСІ***

// const fetchFriends = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`);
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//     return friends;
// };

// fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));

// ******* 2 ВАРИАНТ   ASYNC *****

// function getFruit(name) {
//     const fruits = {
//         apple: 'яблоко',
//         kiwi: 'киви',
//         strawberry: 'клубника',
//     };
//     return Promise.resolve(fruits[name]);
// };

// async function aMakeSmoothie() {
//     // const apple = await getFruit('apple');
//     console.log(await getFruit('apple'));
//     const kiwi = await getFruit('kiwi');
//     console.log(kiwi);
// }

// aMakeSmoothie();

// *** СРАЗУ ВСЕ ПРОМИСІ ОБРАБАТІВАТЬ***


// async function aMakeSmoothie() {
//     try {
//         // замер времени , сколько віполняется функция time - timeEnd
//         console.time('aMakeSmoothie');

//         const apple = getFruit('apple');
//         const kiwi = getFruit('kiwi');
//         const berry = getFruit('strawberry');

//         const fruits = await Promise.all([apple, kiwi, berry]);
//         console.log(fruits)
//         return fruits;
//         console.timeEnd('aMakeSmoothie');
//     } catch (error) {
//         console.log(error);
//         // console.log(error.name);
//         // console.log(error.message);
//         // console.log(error.stack);
//     }
// }

// aMakeSmoothie().then(fruits => console.log(fruits));

// *** БЕЗ АСИНКА И АВЕЙТА**
// function makeSmoothie() {
//     getFruit('apple').then(apple => {
//         console.log(apple);
//     });
//     getFruit('kiwi').then(kiwi => {
//         console.log(kiwi);
//     });
// }
// makeSmoothie()