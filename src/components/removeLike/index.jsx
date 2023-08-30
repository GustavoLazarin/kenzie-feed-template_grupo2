import React, { useState } from 'react';

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleUnlike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>Curtir</button>
      <button onClick={handleUnlike}>Descurtir</button>
      <p>
        {likes === 0
          ? "Seja o primeiro a curtir este post"
          : `${likes} ${likes === 1 ? 'Curtida' : 'Curtidas'}`}
      </p>
    </div>
  );
};


