async function postFormHandler(event) {
    // prevent page from reloading
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();
        console.log('post created!')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);