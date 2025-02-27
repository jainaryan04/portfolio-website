export default function Item({ text, className }) {
    return (
      <li className={`p-2 rounded-md ${className}`}>
        {text}
      </li>
    );
  }