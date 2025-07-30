export const StarIcon = ({
  liked,
  onClick,
}: {
  liked: boolean;
  onClick: () => void;
}) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={liked ? "#FACC15" : "white"}
    stroke={liked ? "#FACC15" : "#9CA3AF"}
    width="24"
    height="24"
    style={{ cursor: "pointer", transition: "fill 0.2s ease" }}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
