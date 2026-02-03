import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Bedge | Data Analyst</title>
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

        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Sales & ROI Dashboard</strong> – Power BI + Excel
          </li>
          <li>
            <strong>Student Performance Tracker</strong> – Python + SQL
          </li>
          <li>
            <strong>Customer Retention Analysis</strong> – Python + Excel
          </li>
        </ul>
      </main>
    </>
  );
}
