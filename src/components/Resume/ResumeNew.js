import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            href="/Ayesha_Resume.pdf"
            download="Ayesha_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <div style={{ width: "50%", height: "700px" }}>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl="/Ayesha_Resume.pdf" />
            </Worker>
          </div>
        </Row> */}

        {/* <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href="/Ayesha_Resume.pdf"
            download="Ayesha_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </div>
  );
}

export default Resume;
