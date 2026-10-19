import { useState } from 'react';

// Comment box at the bottom of a project page. Posting isn't saved anywhere yet:
// it only clears the box until a backend exists to store comments.
export default function CommentBox({ placeholder }) {
  const [text, setText] = useState('');
  return (
    <section className="panel comment-box">
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          placeholder={placeholder}
          aria-label="Comment"
          rows="2"
          className="form-control comment-box__input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <footer className="panel-footer comment-box__footer">
        <ul className="comment-box__tools">
          {['fa-map-marker', 'fa-camera', 'fa-film', 'fa-microphone'].map((icon) => (
            <li key={icon}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <i className={`fa ${icon}`} />
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-info" disabled={!text.trim()} onClick={() => setText('')}>
          Post
        </button>
      </footer>
    </section>
  );
}
