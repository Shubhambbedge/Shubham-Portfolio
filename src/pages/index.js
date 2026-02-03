import Head from "next/head";

/* ---------- Animations ---------- */
const fadeIn = {
  animation: "fadeIn 0.8s ease-in forwards",
  opacity: 0,
};

const fadeInDelay = (delay) => ({
  animation: "fadeIn 0.8s ease-in forwards",
  animationDelay: delay,
  opacity: 0,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Bedge | Data Analyst</title>
        <meta
          name="description"
          content="Data Analyst skilled in Excel, SQL, Power BI, and Python"
        />

        {/* Animation keyframes */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Head>

      <main
        style={{
          maxWidth: "900px",
          margin: "60px auto",
          padding: "40px",
          backgroundColor: "#fafafa",
          borderRadius: "12px",
          fontFamily: "Inter, system-ui, Arial",
        }}
      >
        {/* HERO */}
        <h1 style={{ ...fadeIn, fontSize: "48px", marginBottom: "10px" }}>
          Shubham Bedge
        </h1>

        <h2
          style={{
            ...fadeInDelay("0.2s"),
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Data Analyst
        </h2>

        <p style={{ ...fadeInDelay("0.3s"), fontSize: "18px", lineHeight: "1.6" }}>
          Data analyst with strong hands-on skills in Excel, SQL, Power BI, and
          Python. Background in EdTech sales with business-focused analytics
          experience.
        </p>

        {/* SOCIAL LINKS */}
        <div style={{ marginTop: "20px", marginBottom: "40px" }}>
          <a
            href="https://www.linkedin.com/in/shubhambedge/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#0a66c2",
              fontSize: "16px",
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/shubhambbedge"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#000",
              fontSize: "16px",
            }}
          >
            GitHub
          </a>
        </div>

        <hr style={{ margin: "40px 0" }} />

        {/* ABOUT */}
        <h2
          style={{
            ...fadeInDelay("0.4s"),
            marginBottom: "12px",
            borderBottom: "2px solid #000",
          }}
        >
          About Me
        </h2>
        <p>
          I specialize in transforming raw data into actionable insights. I have
          worked with sales, CRM, and performance datasets and enjoy building
          dashboards and analytical reports that support decision-making.
        </p>

        <hr style={{ margin: "40px 0" }} />

        {/* SKILLS */}
        <h2
          style={{
            ...fadeInDelay("0.5s"),
            marginBottom: "12px",
            borderBottom: "2px solid #000",
          }}
        >
          Skills
        </h2>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Excel (Advanced)</li>
          <li>SQL (Joins, CTEs, Window Functions)</li>
          <li>Power BI (DAX, Dashboards)</li>
          <li>Python (Pandas, NumPy)</li>
        </ul>

        <hr style={{ margin: "40px 0" }} />

        {/* RESUME */}
        <a
          href="/Shubham B Bedge Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "30px 0",
            padding: "12px 24px",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Download Resume
        </a>

        <hr style={{ margin: "40px 0" }} />

        {/* PROJECTS */}
        <h2
          style={{
            ...fadeInDelay("0.6s"),
            marginBottom: "12px",
            borderBottom: "2px solid #000",
          }}
        >
          Projects
        </h2>

        {/* Project 1 */}
        <div
          style={{
            ...fadeInDelay("0.7s"),
            padding: "16px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            marginBottom: "20px",
          }}
        >
          <h3>Sales & ROI Dashboard</h3>
          <p>
            <strong>Tools:</strong> Power BI, Excel
          </p>
          <p>
            Built an interactive dashboard to track sales performance and ROI
            across regions. Automated weekly reporting and reduced manual effort
            by <strong>40%</strong>, improving visibility for business leaders.
          </p>
        </div>

        {/* Project 2 */}
        <div
          style={{
            ...fadeInDelay("0.8s"),
            padding: "16px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            marginBottom: "20px",
          }}
        >
          <h3>Student Performance Tracker</h3>
          <p>
            <strong>Tools:</strong> Python, SQL
          </p>
          <p>
            Analyzed student performance data to identify trends and at-risk
            students, enabling early intervention for{" "}
            <strong>15–20%</strong> of students.
          </p>
        </div>

        {/* Project 3 */}
        <div
          style={{
            ...fadeInDelay("0.9s"),
            padding: "16px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            marginBottom: "20px",
          }}
        >
          <h3>Customer Retention Analysis</h3>
          <p>
            <strong>Tools:</strong> Python, Excel
          </p>
          <p>
            Performed churn analysis to identify key factors affecting customer
            retention and prioritized{" "}
            <strong>high-risk customer segments</strong> to support retention
            strategies.
          </p>
        </div>
      </main>
    </>
  );
}
