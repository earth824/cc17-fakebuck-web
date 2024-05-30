export default function FormButton({ children, onClick }) {
  return (
    <button
      className="hover:bg-gray-100 px-2.5 py-1.5 rounded-md text-blue-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
