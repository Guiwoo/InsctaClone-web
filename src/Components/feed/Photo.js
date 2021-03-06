import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "../Avatar";
import { FatText } from "../shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  max-width: 615px;
`;
const PhotoHeader = styled.div`
  padding: 15px 15px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 10px;
`;
const PhotoFile = styled.img`
  min-width: 100%;
  max-width: 100%;
`;

const PhotoInfo = styled.div`
  padding: 15px;
`;
const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
  }
`;
const PhotoAction = styled.div`
  margin-right: 10px;
  svg {
    font-size: 20px;
  }
`;
const Likes = styled(FatText)`
  margin-top: 10px;
  display: block;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Photo({
  id,
  user,
  file,
  isLiked,
  likes,
  caption,
  commentNumber,
  comments,
}) {
  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;
    if (ok) {
      const photoId = `Photo:${id}`;
      cache.modify({
        id: photoId,
        fields: {
          isLiked(prev) {
            return !prev;
          },
          likes(prev) {
            if (isLiked) {
              return prev - 1;
            }
            return prev + 1;
          },
        },
      });
    }
  };
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: {
      id,
    },
    update: updateToggleLike,
  });
  return (
    <PhotoContainer key={id}>
      <PhotoHeader>
        <Links to={`/users/${user.userName}`}>
          <Avatar lg url={user.avatar} />
        </Links>
        <Links to={`/users/${user?.userName}`}>
          <Username>{user.userName}</Username>
        </Links>
      </PhotoHeader>
      <PhotoFile src={file} />
      <PhotoInfo>
        <PhotoActions>
          <div>
            <PhotoAction onClick={toggleLikeMutation}>
              <FontAwesomeIcon
                style={{ color: isLiked ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : faHeart}
              />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faComment} />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </PhotoAction>
          </div>
          <div>
            <FontAwesomeIcon size={"2x"} icon={faBookmark} />
          </div>
        </PhotoActions>
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        <Comments
          photoId={id}
          author={user.userName}
          caption={caption}
          comments={comments}
          commentNumber={commentNumber}
        />
      </PhotoInfo>
    </PhotoContainer>
  );
}
Photo.porpTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
  }),
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  caption: PropTypes.string,
  commentNumber: PropTypes.number,
  //commentNumber: PropTypes.number.isRequired,
};

export default Photo;
