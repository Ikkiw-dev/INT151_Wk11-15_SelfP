document.getElementById("getText").addEventListener('click', getText)

function getText() {
    // fetch('sample.txt')
    // .then(function(res) {
    //     return (res.text());
    // })
    // .then(function(data) {
    //     console.log(data)
    // })

    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err))

}

document.getElementById("getUsers").addEventListener('click', getUsers)

function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<p>Users</p>'
        data.forEach(function(user) {
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `;
        });

        document.getElementById('output').innerHTML = output;
        });
    }


document.getElementById("getPosts").addEventListener('click', getPosts)

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<p>Posts</p>'
        data.forEach(function(Posts) {
            output += `
            <div>
                <h3>${Posts.title}</h3>
                <p>${Posts.body}</p>
            </div>
            `;
        });

        document.getElementById('output').innerHTML = output;
        });
}

document.getElementById("addPost").addEventListener('click', addPosts)

function addPosts(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

document.getElementById("DeletePosts").addEventListener("click", () => {
    let id = prompt("Enter Post ID to Delete:")
    deletepost(id)
})
function deletepost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then(() => {
        alert(`Post ${id} deleted`)
        getPosts()
    })
    .catch(err => console.log(err))
}

document.getElementById("UpdatePosts").addEventListener("click", () => {
    let id = prompt("Enter your post id that you want to update:")
    updatepost(id);
})
function updatepost(id) {

    let newtitle = prompt("Enter new Title");
    let newBody = prompt("Enter new Body");

    fetch(  `https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:newtitle, body:newBody})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Updated : ", data);
        alert(`Post ${id} updated`)
        getPosts();
    })
    .catch((err) => console.log(err))
}

