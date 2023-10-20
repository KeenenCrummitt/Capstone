import "./App.css";

export default function MyApp() {
  return (
    <div className="hero-box">
      <div className="hero-background">
        <div className="hero-left"></div>
        <div className="hero-right"></div>
      </div>
      <div className="hero-content">
        <div className="credentials">
          <h2>Frontend Developer</h2>
          <button>Hire Me</button>
          <p></p>
          <p></p>
        </div>
        <div className="self-image">
          <img src="/Portfolio-img.png" alt="selfie" />
        </div>
      </div>
    </div>
  );
}
