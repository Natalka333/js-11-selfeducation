

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

// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome",
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

// ****UPDATE*****

// Change value of id property to update different post
// const postToUpdate = {
//     id: 1,
//     body: "CRUD is really awesome for Nataly",
// };

// const options = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));

// ***** DELITE****

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//     method: "DELETE",
// })
//     .then(() => console.log("Post deleted"))
//     .catch(error => console.log("Error:", error));

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

