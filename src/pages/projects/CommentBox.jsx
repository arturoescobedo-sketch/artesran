import { useState } from 'react';

// Set to true once a backend exists to store comments. Until then the box is shown but can't be used.
const COMMENTS_ENABLED = false;

// Comment box at the bottom of a project page. Posting isn't saved anywhere yet:
// it only clears the box until a backend exists to store comments.
export default function CommentBox({ placeholder }) {
  const [text, setText] = useState('');
  return (
    <section className="panel comment-box">
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          placeholder={COMMENTS_ENABLED ? placeholder : 'Comments are coming soon.'}
          aria-label="Comment"
          rows="2"
          className="form-control comment-box__input"
          value={text}
          disabled={!COMMENTS_ENABLED}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <footer className="panel-footer comment-box__footer">
        <button className="btn btn-info" disabled={!COMMENTS_ENABLED || !text.trim()} onClick={() => setText('')}>
          Post
        </button>
      </footer>
    </section>
  );
}
