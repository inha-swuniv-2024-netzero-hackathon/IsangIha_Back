import React, { useState } from "react"
import Admin from "../../assets/Admin.png"
import User from "../../assets/User.png"
import { useNavigate } from "react-router-dom"

const Authority = () => {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const onClickMove = () => {
    if (selected === "user") {
      navigate("/user")
    } else {
      navigate("/admin")
    }
  }

  return (
    <div className="authority-container">
      <div className="authority-h1-container">어떤 서비스를 이용하시나요?</div>

      <div className="authority-select-image-container">
        <div
          className={`authority-image-wrapper ${
            selected === "admin" ? "selected" : ""
          }`}
          onClick={() => setSelected("admin")}
        >
          <img src={Admin} alt="Admin" />
          <div className="authority-image-title">회사</div>
        </div>
        <div
          className={`authority-image-wrapper ${
            selected === "user" ? "selected" : ""
          }`}
          onClick={() => setSelected("user")}
        >
          <img src={User} alt="User" />
          <div className="authority-image-title">유저</div>
        </div>
      </div>

      {selected === "admin" && (
        <p className="authority-description">
          코투리와 함께 수거함을 배치할 회사가 되어주세요.
        </p>
      )}

      {selected === "user" && (
        <p className="authority-description">
          현재 코투리에서 제공하는 수거함 위치를 확인해보세요.
        </p>
      )}

      {selected && (
        <button className="authority-button" onClick={onClickMove}>
          확인
        </button>
      )}
    </div>
  )
}

export default Authority
