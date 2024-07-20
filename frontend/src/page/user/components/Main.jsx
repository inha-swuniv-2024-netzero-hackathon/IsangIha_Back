// // // import React, { useState, useEffect } from "react"
// // // import { Carousel } from "react-responsive-carousel"
// // // import "react-responsive-carousel/lib/styles/carousel.min.css"
// // // import Slide1 from "../../../assets/Main1.png"
// // // import Slide2 from "../../../assets/Main2.png"
// // // import { useNavigate } from "react-router-dom"

// // // const Main = () => {
// // //   const [userCount, setUserCount] = useState(0)
// // //   const [events, setEvents] = useState([])
// // //   const navigate = useNavigate()

// // //   useEffect(() => {
// // //     setUserCount(150)

// // //     // 로컬스토리지에서 데이터를 가져옴
// // //     const storedData = localStorage.getItem("eventData")
// // //     if (storedData) {
// // //       const parsedData = JSON.parse(storedData)
// // //       setEvents([parsedData])
// // //     }
// // //   }, [])

// // //   return (
// // //     <div className="user-container">
// // //       <div className="home-container">
// // //         <Carousel
// // //           showArrows={true}
// // //           infiniteLoop={true}
// // //           showThumbs={false}
// // //           showStatus={false}
// // //           autoPlay={true}
// // //           interval={5000}
// // //         >
// // //           <div>
// // //             <img
// // //               src={Slide1}
// // //               alt="코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다."
// // //             />
// // //             <p className="legend">
// // //               코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다.
// // //             </p>
// // //           </div>
// // //           <div>
// // //             <img
// // //               src={Slide2}
// // //               alt="지도를 사용하여 재할용 수거함을 찾아보세요."
// // //             />
// // //             <p className="legend">
// // //               지도를 사용하여 재할용 수거함을 찾아보세요.
// // //             </p>
// // //           </div>
// // //         </Carousel>
// // //       </div>
// // //       <h1 className="user-h1-title">
// // //         현재 코투리 서비스를 {userCount}명이 사용하고 있어요
// // //       </h1>
// // //       <div className="user-event-list">
// // //         <div className="user-event-list-title">현재 진행중인 이벤트 공간</div>
// // //         {events.map((event, index) => (
// // //           <div
// // //             key={index}
// // //             className="user-event-list-item"
// // //             onClick={() => navigate(`/user/event/${event.eventName}`)}
// // //           >
// // //             <h2>{event.eventName}</h2>
// // //             <p>{event.enterpriseName}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div
// // //         className="user-event-qr-move-detail"
// // //         onClick={() => navigate("/user/qr")}
// // //       >
// // //         QR
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Main

// // import React, { useState, useEffect } from "react"
// // import { Carousel } from "react-responsive-carousel"
// // import "react-responsive-carousel/lib/styles/carousel.min.css"
// // import Slide1 from "../../../assets/Main1.png"
// // import Slide2 from "../../../assets/Main2.png"
// // import { useNavigate } from "react-router-dom"
// // import axios from "axios"

// // const Main = () => {
// //   const [userCount, setUserCount] = useState(0)
// //   const [events, setEvents] = useState([])
// //   const navigate = useNavigate()

// //   useEffect(() => {
// //     setUserCount(150)

// //     // API 요청으로 데이터를 가져옴
// //     const fetchEvents = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://ec2-54-180-141-4.ap-northeast-2.compute.amazonaws.com:8080/api/events"
// //         )
// //         // 필요한 데이터만 상태에 저장
// //         const eventData = response.data.map((event) => ({
// //           enterpriseName: event.enterpriseName,
// //           eventName: event.eventName,
// //           headcount: event.headcount,
// //           startDate: event.startDate,
// //           endDate: event.endDate,
// //         }))
// //         setEvents(eventData)
// //       } catch (error) {
// //         console.error("Error fetching event data:", error)
// //       }
// //     }

// //     fetchEvents()
// //   }, [])

// //   return (
// //     <div className="user-container">
// //       <div className="home-container">
// //         <Carousel
// //           showArrows={true}
// //           infiniteLoop={true}
// //           showThumbs={false}
// //           showStatus={false}
// //           autoPlay={true}
// //           interval={5000}
// //         >
// //           <div>
// //             <img
// //               src={Slide1}
// //               alt="코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다."
// //             />
// //             <p className="legend">
// //               코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다.
// //             </p>
// //           </div>
// //           <div>
// //             <img
// //               src={Slide2}
// //               alt="지도를 사용하여 재할용 수거함을 찾아보세요."
// //             />
// //             <p className="legend">
// //               지도를 사용하여 재할용 수거함을 찾아보세요.
// //             </p>
// //           </div>
// //         </Carousel>
// //       </div>
// //       <h1 className="user-h1-title">
// //         현재 코투리 서비스를 {userCount}명이 사용하고 있어요
// //       </h1>
// //       <div className="user-event-list">
// //         <div className="user-event-list-title">현재 진행중인 이벤트 공간</div>
// //         {events.map((event, index) => (
// //           <div
// //             key={index}
// //             className="user-event-list-item"
// //             onClick={() => navigate(`/user/event/${event.eventName}`)}
// //           >
// //             <h2>{event.eventName}</h2>
// //             <p>{event.enterpriseName}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div
// //         className="user-event-qr-move-detail"
// //         onClick={() => navigate("/user/qr")}
// //       >
// //         QR
// //       </div>
// //     </div>
// //   )
// // }

// // export default Main

// import React, { useState, useEffect } from "react"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import Slide1 from "../../../assets/Main1.png"
// import Slide2 from "../../../assets/Main2.png"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"

// const Main = () => {
//   const [userCount, setUserCount] = useState(0)
//   const [events, setEvents] = useState([])
//   const navigate = useNavigate()

//   useEffect(() => {
//     setUserCount(150)

//     // API 요청으로 데이터를 가져옴
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           "http://ec2-54-180-141-4.ap-northeast-2.compute.amazonaws.com:8080/api/events"
//         )
//         // 필요한 데이터만 상태에 저장
//         const eventData = response.data.map((event) => ({
//           id: event.id,
//           enterpriseName: event.enterpriseName,
//           eventName: event.eventName,
//           headcount: event.headcount,
//           startDate: event.startDate,
//           endDate: event.endDate,
//         }))
//         setEvents(eventData)
//       } catch (error) {
//         console.error("Error fetching event data:", error)
//       }
//     }

//     fetchEvents()
//   }, [])

//   return (
//     <div className="user-container">
//       <div className="home-container">
//         <Carousel
//           showArrows={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           autoPlay={true}
//           interval={5000}
//         >
//           <div>
//             <img
//               src={Slide1}
//               alt="코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다."
//             />
//             <p className="legend">
//               코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다.
//             </p>
//           </div>
//           <div>
//             <img
//               src={Slide2}
//               alt="지도를 사용하여 재할용 수거함을 찾아보세요."
//             />
//             <p className="legend">
//               지도를 사용하여 재할용 수거함을 찾아보세요.
//             </p>
//           </div>
//         </Carousel>
//       </div>
//       <h1 className="user-h1-title">
//         현재 코투리 서비스를 {userCount}명이 사용하고 있어요
//       </h1>
//       <div className="user-event-list">
//         <div className="user-event-list-title">현재 진행중인 이벤트 공간</div>
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="user-event-list-item"
//             onClick={() => navigate(`/user/event/${event.id}`)}
//           >
//             <h2>{event.eventName}</h2>
//             <p>{event.enterpriseName}</p>
//           </div>
//         ))}
//       </div>
//       <div
//         className="user-event-qr-move-detail"
//         onClick={() => navigate("/user/qr")}
//       >
//         QR
//       </div>
//     </div>
//   )
// }

// export default Main

import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slide1 from "../../../assets/Main1.png"
import Slide2 from "../../../assets/Main2.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Main = () => {
  const [userCount, setUserCount] = useState(0)
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // 초기 유저 수 설정
    setUserCount(150)

    // 유저 수를 10초마다 한 명씩 증가
    const userCountInterval = setInterval(() => {
      setUserCount((prevCount) => prevCount + 1)
    }, 10000)

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(userCountInterval)
  }, [])

  useEffect(() => {
    // API 요청으로 데이터를 가져옴
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://ec2-54-180-141-4.ap-northeast-2.compute.amazonaws.com:8080/api/events"
        )
        // 필요한 데이터만 상태에 저장
        const eventData = response.data.map((event) => ({
          id: event.id,
          enterpriseName: event.enterpriseName,
          eventName: event.eventName,
          headcount: event.headcount,
          startDate: event.startDate,
          endDate: event.endDate,
        }))
        setEvents(eventData)
      } catch (error) {
        console.error("Error fetching event data:", error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="user-container">
      <div className="home-container">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <div>
            <img
              src={Slide1}
              alt="코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다."
            />
            <p className="legend">
              코투리는 재활용 수거함이 있는 친환경 도시를 만듭니다.
            </p>
          </div>
          <div>
            <img
              src={Slide2}
              alt="지도를 사용하여 재할용 수거함을 찾아보세요."
            />
            <p className="legend">
              지도를 사용하여 재할용 수거함을 찾아보세요.
            </p>
          </div>
        </Carousel>
      </div>
      <h1 className="user-h1-title">
        현재 코투리 서비스를 {userCount}명이 사용하고 있어요
      </h1>
      <div className="user-event-list">
        <div className="user-event-list-title">현재 진행중인 이벤트 공간</div>
        {events.map((event) => (
          <div
            key={event.id}
            className="user-event-list-item"
            onClick={() => navigate(`/user/event/${event.id}`)}
          >
            <h2>{event.eventName}</h2>
            <p>{event.enterpriseName}</p>
          </div>
        ))}
      </div>
      <div
        className="user-event-qr-move-detail"
        onClick={() => navigate("/user/qr")}
      >
        QR
      </div>
    </div>
  )
}

export default Main
