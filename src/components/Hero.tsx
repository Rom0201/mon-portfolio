import HalftoneBackground from "./HalftoneBackground";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        background: "#0a0c10",
        borderBottom: "1px solid #00e5ff15",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="px-8 pt-20"
    >
      <HalftoneBackground />

      {/* Badge mobile */}
      <div
        className="md:hidden"
        style={{
          position: "absolute",
          top: "70px",
          left: "32px",
          zIndex: 2,
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "11px",
          color: "#00e5ff",
          border: "1px solid #00e5ff44",
          padding: "4px 12px",
          borderRadius: "2px",
          letterSpacing: "2px",
        }}
      >
        DISPONIBLE POUR UN STAGE
      </div>

      <div
        className="max-w-6xl mx-auto w-full"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Badge desktop */}
        <div
          className="hidden md:inline-flex"
          style={{
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "11px",
            color: "#00e5ff",
            border: "1px solid #00e5ff44",
            padding: "4px 12px",
            borderRadius: "2px",
            marginBottom: "24px",
            letterSpacing: "2px",
          }}
        >
          DISPONIBLE POUR UN STAGE
        </div>

        <h1
          className="text-[32px] md:text-[52px] mt-8 md:mt-0"
          style={{
            fontWeight: "600",
            lineHeight: "1.1",
            marginBottom: "16px",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#ffffff", display: "block" }}>ROMARIC</span>

          <span style={{ color: "#e040fb", display: "block" }}>
            CONCEPTEUR DÉVELOPPEUR INTÉGRATEUR D'IA
          </span>
        </h1>

        {/* Desktop */}
        <div className="hidden md:block">
          <p
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "13px",
              color: "#555",
              lineHeight: "2",
              marginBottom: "32px",
              maxWidth: "460px",
            }}
          >
            &gt; Formation Metz Numeric School
            <br />
            &gt; React · TypeScript · Python · MySQL
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="#projects"
              style={{
                background: "#00e5ff",
                color: "#0a0c10",
                padding: "10px 24px",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "#e040fb",
                padding: "10px 24px",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "1px solid #e040fb66",
                textDecoration: "none",
                borderRadius: "2px",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden"
        style={{
          position: "absolute",
          bottom: "30px",
          left: "32px",
          right: "32px",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "13px",
            color: "#888",
            lineHeight: "2",
            marginBottom: "20px",
          }}
        >
          &gt; Formation Metz Numeric School
          <br />
          &gt; React · TypeScript · Python · MySQL
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="#projects"
            style={{
              background: "#00e5ff",
              color: "#0a0c10",
              padding: "10px 20px",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "#e040fb",
              padding: "10px 20px",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              border: "1px solid #e040fb66",
              textDecoration: "none",
              borderRadius: "2px",
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
