import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FatText } from "../shared";
// import sanitizeHtml from "sanitize-html"; dangerousHtml
import { Link } from "react-router-dom";

const SComment = styled.div`
  display: flex;
`;
const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Comment({ author, payload }) {
  return (
    <SComment>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/g.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
    </SComment>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default Comment;
