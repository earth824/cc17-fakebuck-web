import coverImage from '../../../assets/cover.jpeg';

const roundedMap = {
  bottom: 'rounded-b-lg',
  default: 'rounded-lg'
};

export default function CoverImage({ src, rounded = 'default' }) {
  return (
    <div
      className={`max-w-[68.5rem] max-h-[25.25rem] overflow-hidden mx-auto flex items-center justify-center aspect-[1096/404] ${roundedMap[rounded]}`}
    >
      <img src={src || coverImage} alt="cover" />
    </div>
  );
}
