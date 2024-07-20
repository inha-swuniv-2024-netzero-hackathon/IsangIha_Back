import React from "react"
import QrScanner from "react-qr-scanner"
import { useNavigate } from "react-router-dom"

const QR = () => {
  const navigate = useNavigate()

  const handleScan = (data) => {
    if (data) {
      console.log("QR src:", data.text)
      // 스캔한 src로 이동
      if (data.text.startsWith("http://") || data.text.startsWith("https://")) {
        // External URL
        window.location.href = data.text
      } else {
        // Internal URL
        navigate(data.text)
      }
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  }

  return (
    <div className="qr-reader-container">
      <button onClick={() => navigate("/user")}>Close</button>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
        facingMode="environment" // 후면 카메라를 사용
      />
    </div>
  )
}

export default QR
