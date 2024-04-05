// Sample blog post data (replace with your own data)
const blogPosts = [
    { title: "Operatia 05.04", content: "Rana arăta foarte bine, doar că rana era prea mare și nu putea fi închisă. Săptămâna viitoare va fi operată și medicii vor îndrăzni să-i facă un transplant de piele și pompa va fi luată pentru totdeauna." },
];

// Function to display blog posts on the webpage
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");
    
    blogPosts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-post");
        
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        
        blogPostsContainer.appendChild(postElement);
    });
}

// Call the function to display blog posts when the page loads
window.onload = displayBlogPosts;
