async function commentFormHandler(event) {
  event.preventDefault();

  // eslint-disable-next-line camelcase
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  // eslint-disable-next-line camelcase
  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  // eslint-disable-next-line camelcase
  // console.log(`comment_text: ${comment_text} post_id: ${post_id}`);
  // eslint-disable-next-line camelcase
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
