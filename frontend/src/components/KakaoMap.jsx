// import React, { useEffect, useRef, useState } from "react"

// const KakaoMap = ({ location, coordinates, cluster }) => {
//   const mapRef = useRef(null)
//   const [modalData, setModalData] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [currentLocation, setCurrentLocation] = useState(null)

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords
//           setCurrentLocation({ latitude, longitude })
//         },
//         (error) => {
//           console.error("위치 받아오기 오류", error)
//         }
//       )
//     } else {
//       console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
//     }
//   }, [])

//   useEffect(() => {
//     const script = document.createElement("script")
//     const apiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY
//     const scriptUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`
//     script.src = scriptUrl
//     script.async = true
//     script.onload = () => {
//       if (window.kakao && window.kakao.maps) {
//         window.kakao.maps.load(() => {
//           const container = document.getElementById("map")
//           const options = {
//             center: new window.kakao.maps.LatLng(
//               location.latitude,
//               location.longitude
//             ),
//             level: 3,
//           }
//           const map = new window.kakao.maps.Map(container, options)
//           mapRef.current = map

//           // 현재 위치 마커
//           if (currentLocation) {
//             new window.kakao.maps.Marker({
//               position: new window.kakao.maps.LatLng(
//                 currentLocation.latitude,
//                 currentLocation.longitude
//               ),
//               map: map,
//               image: new window.kakao.maps.MarkerImage(
//                 "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
//                 new window.kakao.maps.Size(32, 32),
//                 {
//                   offset: new window.kakao.maps.Point(16, 32),
//                 }
//               ),
//             })

//             // 현재 위치 라벨
//             new window.kakao.maps.CustomOverlay({
//               map: map,
//               position: new window.kakao.maps.LatLng(
//                 currentLocation.latitude,
//                 currentLocation.longitude
//               ),
//               content: '<div style="padding:5px; color:red;">현재 위치</div>',
//               yAnchor: 1.5,
//             })
//           }

//           const starMarkerPosition = new window.kakao.maps.LatLng(
//             location.latitude,
//             location.longitude
//           )

//           // 축제 장소 마커
//           new window.kakao.maps.Marker({
//             position: starMarkerPosition,
//             map: map,
//             image: new window.kakao.maps.MarkerImage(
//               "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
//               new window.kakao.maps.Size(32, 32),
//               {
//                 offset: new window.kakao.maps.Point(16, 32),
//               }
//             ),
//           })

//           // 클러스터
//           new window.kakao.maps.Circle({
//             center: starMarkerPosition,
//             radius: cluster,
//             strokeWeight: 2,
//             strokeColor: "#00a86b",
//             strokeOpacity: 1,
//             strokeStyle: "dashed",
//             fillColor: "#00a86b",
//             fillOpacity: 0.2,
//           }).setMap(map)

//           coordinates.forEach((coord) => {
//             const markerPosition = new window.kakao.maps.LatLng(
//               coord.latitude,
//               coord.longitude
//             )

//             const marker = new window.kakao.maps.Marker({
//               position: markerPosition,
//               map: map,
//               image: new window.kakao.maps.MarkerImage(
//                 "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_blue.png",
//                 new window.kakao.maps.Size(32, 32),
//                 {
//                   offset: new window.kakao.maps.Point(16, 32),
//                 }
//               ),
//             })

//             window.kakao.maps.event.addListener(marker, "click", () => {
//               setModalData({
//                 latitude: coord.latitude,
//                 longitude: coord.longitude,
//                 percentage: Math.floor(Math.random() * 100),
//               })
//               setIsModalOpen(true)
//             })
//           })
//         })
//       } else {
//         console.error("Kakao Map API 지원 오류")
//       }
//     }
//     script.onerror = () => {
//       console.error("Kakao Map script load 오류")
//     }
//     document.head.appendChild(script)
//   }, [location, coordinates, cluster, currentLocation])

//   return (
//     <>
//       <div id="map" style={{ width: "100%", height: "500px" }}></div>
//       {isModalOpen && modalData && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setIsModalOpen(false)}>
//               &times;
//             </span>
//             <h2>쓰레기통 상태</h2>
//             <p>위도: {modalData.latitude}</p>
//             <p>경도: {modalData.longitude}</p>
//             <p>차 있는 퍼센트: {modalData.percentage}%</p>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default KakaoMap

import React, { useEffect, useRef, useState } from "react"

const KakaoMap = ({ location, coordinates, cluster }) => {
  const mapRef = useRef(null)
  const [modalData, setModalData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCurrentLocation({ latitude, longitude })
        },
        (error) => {
          console.error("위치 받아오기 오류", error)
        }
      )
    } else {
      console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
    }
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    const apiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY
    const scriptUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`
    script.src = scriptUrl
    script.async = true
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map")
          const options = {
            center: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude
            ),
            level: 3,
          }
          const map = new window.kakao.maps.Map(container, options)
          mapRef.current = map

          // 현재 위치 마커
          if (currentLocation) {
            new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(
                currentLocation.latitude,
                currentLocation.longitude
              ),
              map: map,
              image: new window.kakao.maps.MarkerImage(
                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
                new window.kakao.maps.Size(32, 32),
                {
                  offset: new window.kakao.maps.Point(16, 32),
                }
              ),
            })

            // 현재 위치 라벨
            new window.kakao.maps.CustomOverlay({
              map: map,
              position: new window.kakao.maps.LatLng(
                currentLocation.latitude,
                currentLocation.longitude
              ),
              content: '<div style="padding:5px; color:red;">현재 위치</div>',
              yAnchor: 1.5,
            })
          }

          const starMarkerPosition = new window.kakao.maps.LatLng(
            location.latitude,
            location.longitude
          )

          // 축제 장소 마커
          new window.kakao.maps.Marker({
            position: starMarkerPosition,
            map: map,
            image: new window.kakao.maps.MarkerImage(
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
              new window.kakao.maps.Size(32, 32),
              {
                offset: new window.kakao.maps.Point(16, 32),
              }
            ),
          })

          // 클러스터
          new window.kakao.maps.Circle({
            center: starMarkerPosition,
            radius: cluster,
            strokeWeight: 2,
            strokeColor: "#00a86b",
            strokeOpacity: 1,
            strokeStyle: "dashed",
            fillColor: "#00a86b",
            fillOpacity: 0.2,
          }).setMap(map)

          coordinates.forEach((coord) => {
            const markerPosition = new window.kakao.maps.LatLng(
              coord.latitude,
              coord.longitude
            )

            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              map: map,
            })

            window.kakao.maps.event.addListener(marker, "click", () => {
              setModalData({
                latitude: coord.latitude,
                longitude: coord.longitude,
                percentage: Math.floor(Math.random() * 100),
              })
              setIsModalOpen(true)
            })
          })
        })
      } else {
        console.error("Kakao Map API 지원 오류")
      }
    }
    script.onerror = () => {
      console.error("Kakao Map script load 오류")
    }
    document.head.appendChild(script)
  }, [location, coordinates, cluster, currentLocation])

  return (
    <>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      {isModalOpen && modalData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>쓰레기통 상태</h2>
            <p>위도: {modalData.latitude}</p>
            <p>경도: {modalData.longitude}</p>
            <p>차 있는 퍼센트: {modalData.percentage}%</p>
          </div>
        </div>
      )}
    </>
  )
}

export default KakaoMap
