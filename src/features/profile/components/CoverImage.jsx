import coverImage from '../../../assets/cover.jpeg';

export default function CoverImage({ src }) {
  return (
    <div className="max-w-[68.5rem] max-h-[25.25rem] overflow-hidden mx-auto rounded-b-lg flex items-center justify-center aspect-[1096/404]">
      <img src={src || coverImage} alt="cover" />
    </div>
  );
}
