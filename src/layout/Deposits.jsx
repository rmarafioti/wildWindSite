import { useEffect } from "react";

export default function Deposits() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h1>DEPOSITS</h1>
      <a
        href="https://calendly.com/wildwindtattoo"
        className="calendly-inline-widget"
        style={{
          color: "#ffffff",
          backgroundColor: "#0069ff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Schedule time with me
      </a>
    </>
  );
}
