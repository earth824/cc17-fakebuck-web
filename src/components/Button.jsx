const bgMap = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  gray: 'bg-gray-200 hover:bg-gray-300'
};

const colorMap = {
  white: 'text-white',
  black: 'text-black'
};

const widthMap = {
  full: 'w-full',
  40: 'w-40'
};

export default function Button({
  children,
  bg = 'blue',
  color = 'white',
  width,
  onClick
}) {
  return (
    <button
      className={`px-3 py-1.5 rounded-md ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
