const Hallo = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('/data')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  return (
    <>
      <div>Hallo React from Flask!</div>
      <ul>
        {data.map(d => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </>
  );
};
