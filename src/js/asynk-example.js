// ***post***

// const newPost = {
//     "userId": 1,
//     "title": "loren ipsum",
//     "body": "Hello"
// };

// async function addPost(post) {
//     const option = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//     };
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', option);
//     const newPost = await response.json();
//     return newPost;
// };

// addPost(newPost).then(renderPost).catch(error => console.log(error));

// function renderPost(post) {
//     console.log('Пришел ответ от бекенда можно рисовать');
//     console.log(post);
// }

// *** update patch***

// async function updatePostById(update, postId) {
//     const option = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(update),
//     }
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, option);
//     const post = await response.json();
//     return post;
// }

// updatePostById({ body: "Hello my cool Nataly!" }, 1);
// updatePostById({ title: 'See you my dear!' }, 2);
// updatePostById({ body: 'Good buy', title: 'I will be back!' }, 3);

// ***delite***
const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//     method: "DELETE",
// })
//     .then(() => console.log("Post deleted"))
//     .catch(error => console.log("Error:", error));

// ** ИЛИ ТАК УДАЛИТЬ**

// async function removePost(postId) {
//     const options = {
//         metod: 'DELETE',
//     }
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, options);

//     const post = await response.json();
//     return post;
// }

// removePost(1)