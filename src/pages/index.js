import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Bedge | Data Analyst</title>
    <div style={{ margin: "20px 0" }}>
  <a
    href="https://www.linkedin.com/in/shubhambedge/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginRight: "16px", textDecoration: "none", fontWeight: "bold" }}
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/shubhambbedge"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", fontWeight: "bold" }}
  >
    GitHub
  </a>
</div>

        <meta
          name="description"
          content="Data Analyst skilled in Excel, SQL, Power BI, and Python"
        />
      </Head>

      <main style={{ maxWidth: "900px", margin: "60px auto", padding: "20px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Shubham Bedge
        </h1>

        <h2 style={{ color: "#555", marginBottom: "30px" }}>
          Data Analyst
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Data analyst with strong hands-on skills in Excel, SQL, Power BI, and
          Python. Background in EdTech sales with business-focused analytics
          experience.
        </p>

        <hr style={{ margin: "40px 0" }} />

        <h2>About Me</h2>
        <p>
          I specialize in transforming raw data into actionable insights. I have
          worked with sales, CRM, and performance datasets and enjoy building
          dashboards and analytical reports that support decision-making.
        </p>

        <hr style={{ margin: "40px 0" }} />

        <h2>Skills</h2>
        <ul>
          <li>Excel (Advanced)</li>
          <li>SQL (Joins, CTEs, Window Functions)</li>
          <li>Power BI (DAX, Dashboards)</li>
          <li>Python (Pandas, NumPy)</li>
        </ul>

        <hr style={{ margin: "40px 0" }} />
<a
  href="Shubham B Bedge Resume.pdf"
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

        <h2>Projects</h2>

<div style={{ marginBottom: "20px" }}>
  <h3>Sales & ROI Dashboard</h3>
  <p>
    <strong>Tools:</strong> Power BI, Excel
  </p>
  <p>
    Built an interactive dashboard to track sales performance and ROI across
    regions. Automated reporting reduced manual effort and improved visibility
    for decision-makers.
  </p>
</div>

<div style={{ marginBottom: "20px" }}>
  <h3>Student Performance Tracker</h3>
  <p>
    <strong>Tools:</strong> Python, SQL
  </p>
  <p>
    Analyzed student performance data to identify trends and at-risk students.
    Created automated reports using Python to support academic interventions.
  </p>
</div>

<div style={{ marginBottom: "20px" }}>
  <h3>Customer Retention Analysis</h3>
  <p>
    <strong>Tools:</strong> Python, Excel
  </p>
  <p>
    Performed churn analysis to identify key factors affecting customer
    retention. Provided insights that helped prioritize high-risk customer
    segments.
  </p>
</div>

      </main>
    </>
  );
}
