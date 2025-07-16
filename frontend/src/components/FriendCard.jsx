import { Link } from "react-router";
import { COURSE_ICONS } from "../constants";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12">
            <img src={friend.profilePic} alt={friend.fullName} />
          </div>
          <h3 className="font-semibold truncate">{friend.fullName}</h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge badge-secondary text-xs">
            {GetCourseEmoji(friend.expertiseCourse)}
            Native: {friend.expertiseCourse}
          </span>
          <span className="badge badge-outline text-xs">
            {GetCourseEmoji(friend.learningCourse)}
            Learning: {friend.learningCourse}
          </span>
        </div>

        <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
          Message
        </Link>
      </div>
    </div>
  );
};
export default FriendCard;

export function GetCourseEmoji(course) {
  if (!course) return null;

  const emoji = COURSE_ICONS[course.toLowerCase()];
  return <span className="mr-1">{emoji || "📘"}</span>;
}
