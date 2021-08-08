import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "./Comment";

const SComments = styled.div`
  margin-top: 10px;
`;
const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  margin: 10px 0;
  font-size: 12px;
`;

function Comments({ author, caption, commentNumber, comments }) {
  return (
    <SComments>
      <Comment author={author} payload={caption} />
      <CommentCount>
        {commentNumber === 1 ? "1 comment" : `${commentNumber} comments`}
      </CommentCount>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.user.userName}
          payload={comment.payload}
        />
      ))}
    </SComments>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  caption: PropTypes.string,
  commentNumber: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatar: PropTypes.string,
        userName: PropTypes.string.isRequired,
      }),
      payload: PropTypes.string.isRequired,
      isMine: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default Comments;
