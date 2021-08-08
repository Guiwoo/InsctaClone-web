import styled from "styled-components";
import PropTypes from "prop-types";
import { FatText } from "../shared";
import sanitizeHtml from "sanitize-html";

const SComment = styled.div`
  display: flex;
`;
const CommentCaption = styled.span`
  margin-left: 10px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Comment({ author, payload }) {
  const cleanedPayload = sanitizeHtml(
    payload.replace(/#[\w]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );
  return (
    <SComment>
      <FatText>{author}</FatText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleanedPayload,
        }}
      />
    </SComment>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default Comment;
