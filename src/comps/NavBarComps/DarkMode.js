import "./css/DarkMode.css";

export default function DarkMode() {
  return (
    <div className="mode">
      <label htmlFor="theme-toggle" className="switch">
        <input id="theme-toggle" type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

/* onChange={() => setTheme(!theme)}
          checked={theme}
          
          <span className={theme === false ? "slider2 round2" : ""}></span>

          <p style={{ color: theme === true ? "#777777" : "#D9D9D9" }}>
        {theme === false ? lightMode : darkMode}
      </p>
          
          */
