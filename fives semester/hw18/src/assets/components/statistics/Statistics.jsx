export default function Statistics(props) {
  return (
    <ul>
      {Object.entries(props).map(([name, count], index) => (
        <li key={index}>
          {name}: {count ? count : 0}
        </li>
      ))}
    </ul>
  );
}
