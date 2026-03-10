import { useState } from 'react';
import like from '@/shared/assets/images/inactive-like.svg';
import dislike from '@/shared/assets/images/inactive-dislike.svg';
import activeLike from '@/shared/assets/images/active-like.svg';
import activeDislike from '@/shared/assets/images/active-dislike.svg';
interface Reaction {
  like: boolean;
  dislike: boolean;
}
export const LikeButtons = () => {
  const [userReaction, setUserReaction] = useState<Reaction>({
    like: false,
    dislike: false,
  });
  const toggleLike = () => {
    setUserReaction((prevState) => ({
      dislike: false,
      like: !prevState.like,
    }));
  };
  const toggleDislike = () => {
    setUserReaction((prevState) => ({
      like: false,
      dislike: !prevState.dislike,
    }));
  };
  return (
    <div className="flex items-center gap-2">
      <button onClick={toggleLike} className="h-7 w-7">
        <img src={userReaction.like ? activeLike : like} alt="like" />
      </button>
      <button onClick={toggleDislike} className="h-7 w-7">
        <img src={userReaction.dislike ? activeDislike : dislike} alt="dislike" />
      </button>
    </div>
  );
};
