export default function Card({ title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}