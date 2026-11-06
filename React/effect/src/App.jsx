import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [zarafat, setZarafat] = useState(null);
  const [yenile, setYenile] = useState(0);
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setZarafat(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);      
      });
  }, [yenile]);

  const restart = () => {
    setLoading(true);
    setYenile(yenile + 1);
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        background: "#f8fafc",
        border: "2px solid #e2e8f0",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h3>Zarafat yarat</h3>

      {loading ? (
        <p>Zarafat yoldadir, yuklenir...</p>
      ) : (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadiusTop: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#0f172a",
          }}
        >
          <h3>Sual : {zarafat?.setup}</h3>
          <p style={{ color: "#2a2a" }}>Cavab : {zarafat?.punchline}</p>
        </div>
      )}
      <div>
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={restart}
        >
          Basqa zarafat
        </button>
      </div>
    </div>
  );
}

export default App;
