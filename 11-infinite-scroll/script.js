const filter = document.getElementById ('filter');
const postsContainer = document.getElementById ('posts-container');
const loading = document.querySelector('.loader');

let limit = 5;
let page = 1;

// Fetch posts from API
async function getPosts() {
    const res = await fetch(`http://localhost:3000/posts?_limit=${limit}&_page=${page}`);
    
    const data = await res.json();

    return data;
}

// Show posts in DOM
async function showPosts() {
    const posts = await getPosts();

    posts.forEach(post => {
        const PostEl= document.createElement('div');
        PostEl.classList.add('post');
        PostEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
      `;

      postsContainer.appendChild(PostEl);
    });
}

showPosts();