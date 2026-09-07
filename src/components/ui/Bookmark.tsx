import BookmarkIcon from "./BookmarkIcon";

interface BookmarkProps {
  isMarked: boolean;
  onMarked: () => void;
}

export default function Bookmark({ isMarked, onMarked }: BookmarkProps) {
  return (
    <button
      type="button"
      aria-label={isMarked ? "Remove bookmark" : "Bookmark project"}
      aria-pressed={isMarked}
      className="cursor-pointer transition-opacity duration-150 hover:opacity-70 md:flex md:items-center"
      onClick={() => onMarked()}
    >
      <BookmarkIcon
        circleColor={isMarked ? "fill-green-700" : "fill-gray-700"}
        pathColor={isMarked ? "fill-white" : "fill-gray-300"}
        className="relative z-10"
        aria-hidden="true"
        focusable="false"
      />
      <span
        aria-hidden="true"
        className={`hidden -ml-10 pr-6 pl-12 py-3.5 rounded-full text-sm font-medium bg-gray-300 md:inline ${isMarked ? "text-green-700" : "text-gray-500"}`}
      >
        {isMarked ? "Bookmarked" : "Bookmark"}
      </span>
    </button>
  );
}
