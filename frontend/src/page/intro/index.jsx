// import React, { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import Logo from "../../assets/Logo.png"

// const Intro = () => {
//   const [countDown, setCountDown] = useState(2) // 초기값 설정
//   const navigate = useNavigate()

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountDown((prev) => prev - 1)
//     }, 1000)

//     return () => clearInterval(timer) // 컴포넌트 언마운트 시 타이머 정리
//   }, [])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.querySelector(".intro-container").classList.add("fade-out")
//       setTimeout(() => {
//         navigate("/authority")
//       }, 1000) // fade-out 애니메이션 시간
//     }, 2000) // 2초 후에 이동ㅌ

//     return () => clearTimeout(timer) // 컴포넌트 언마운트 시 타이머 정리
//   }, [navigate])

//   return (
//     <div className="intro-container">
//       {/* <div className="intro-circle">{countDown}</div> */}
//       <Logo />
//     </div>
//   )
// }

// export default Intro

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.png"

const Intro = () => {
  const [countDown, setCountDown] = useState(2) // 초기값 설정
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer) // 컴포넌트 언마운트 시 타이머 정리
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".intro-container").classList.add("fade-out")
      setTimeout(() => {
        navigate("/authority")
      }, 1000) // fade-out 애니메이션 시간
    }, 2000) // 2초 후에 이동

    return () => clearTimeout(timer) // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate])

  return (
    <div className="intro-container">
      {/* <div className="intro-circle">{countDown}</div> */}
      <div className="logo-conatiner">
        <img src={Logo} alt="CO2RE Logo" />
        <h1 className="logo-h1">코투리</h1>
      </div>
    </div>
  )
}

export default Intro
