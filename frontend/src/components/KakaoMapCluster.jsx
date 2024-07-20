// import React, { useEffect, useRef, useState } from "react"

// const KakaoMapCluster = ({ location, coordinates, cluster, onMapClick }) => {
//   const mapRef = useRef(null)
//   const [markers, setMarkers] = useState([])

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
//           new window.kakao.maps.Marker({
//             position: new window.kakao.maps.LatLng(
//               location.latitude,
//               location.longitude
//             ),
//             map: map,
//             image: new window.kakao.maps.MarkerImage(
//               "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
//               new window.kakao.maps.Size(32, 32),
//               {
//                 offset: new window.kakao.maps.Point(16, 32),
//               }
//             ),
//           })

//           // 현재 위치 라벨
//           new window.kakao.maps.CustomOverlay({
//             map: map,
//             position: new window.kakao.maps.LatLng(
//               location.latitude,
//               location.longitude
//             ),
//             content: '<div style="padding:5px; color:red;">현재 위치</div>',
//             yAnchor: 1.5,
//           })

//           if (coordinates.length > 0) {
//             const coord = coordinates[0]
//             const markerPosition = new window.kakao.maps.LatLng(
//               coord.latitude,
//               coord.longitude
//             )

//             const marker = new window.kakao.maps.Marker({
//               position: markerPosition,
//               map: map,
//               image: new window.kakao.maps.MarkerImage(
//                 "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
//                 new window.kakao.maps.Size(32, 32),
//                 {
//                   offset: new window.kakao.maps.Point(16, 32),
//                 }
//               ),
//             })

//             const circle = new window.kakao.maps.Circle({
//               center: markerPosition,
//               radius: cluster,
//               strokeWeight: 2,
//               strokeColor: "#00a86b",
//               strokeOpacity: 1,
//               strokeStyle: "dashed",
//               fillColor: "#00a86b",
//               fillOpacity: 0.2,
//             })

//             circle.setMap(map)

//             setMarkers([marker])
//           }

//           window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
//             const latlng = mouseEvent.latLng
//             const coord = {
//               latitude: latlng.getLat(),
//               longitude: latlng.getLng(),
//             }
//             onMapClick(coord)
//             mapRef.current.setCenter(latlng)

//             // 기존 마커 제거
//             markers.forEach((marker) => marker.setMap(null))

//             // 새로운 마커 추가
//             const newMarker = new window.kakao.maps.Marker({
//               position: latlng,
//               map: map,
//               image: new window.kakao.maps.MarkerImage(
//                 "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
//                 new window.kakao.maps.Size(32, 32),
//                 {
//                   offset: new window.kakao.maps.Point(16, 32),
//                 }
//               ),
//             })

//             const newCircle = new window.kakao.maps.Circle({
//               center: latlng,
//               radius: cluster,
//               strokeWeight: 2,
//               strokeColor: "#00a86b",
//               strokeOpacity: 1,
//               strokeStyle: "dashed",
//               fillColor: "#00a86b",
//               fillOpacity: 0.2,
//             })

//             newCircle.setMap(map)

//             setMarkers([newMarker])
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
//   }, [location, coordinates, cluster, onMapClick])

//   return <div id="map" style={{ width: "100%", height: "500px" }}></div>
// }

// export default KakaoMapCluster

import React, { useEffect, useRef, useState } from "react"

const KakaoMapCluster = ({ location, coordinates, cluster, onMapClick }) => {
  const mapRef = useRef(null)
  const [markers, setMarkers] = useState([])

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
          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude
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
              location.latitude,
              location.longitude
            ),
            content: '<div style="padding:5px; color:red;">현재 위치</div>',
            yAnchor: 1.5,
          })

          if (coordinates.length > 0) {
            const coord = coordinates[0]
            const markerPosition = new window.kakao.maps.LatLng(
              coord.latitude,
              coord.longitude
            )

            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              map: map,
              image: new window.kakao.maps.MarkerImage(
                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                new window.kakao.maps.Size(32, 32),
                {
                  offset: new window.kakao.maps.Point(16, 32),
                }
              ),
            })

            const circle = new window.kakao.maps.Circle({
              center: markerPosition,
              radius: cluster,
              strokeWeight: 2,
              strokeColor: "#00a86b",
              strokeOpacity: 1,
              strokeStyle: "dashed",
              fillColor: "#00a86b",
              fillOpacity: 0.2,
            })

            circle.setMap(map)

            setMarkers([marker])
          }

          window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
            const latlng = mouseEvent.latLng
            const coord = {
              latitude: latlng.getLat(),
              longitude: latlng.getLng(),
            }
            onMapClick(coord)
            mapRef.current.setCenter(latlng)

            // 기존 마커 제거
            markers.forEach((marker) => marker.setMap(null))

            // 새로운 마커 추가
            const newMarker = new window.kakao.maps.Marker({
              position: latlng,
              map: map,
              image: new window.kakao.maps.MarkerImage(
                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                new window.kakao.maps.Size(32, 32),
                {
                  offset: new window.kakao.maps.Point(16, 32),
                }
              ),
            })

            const newCircle = new window.kakao.maps.Circle({
              center: latlng,
              radius: cluster,
              strokeWeight: 2,
              strokeColor: "#00a86b",
              strokeOpacity: 1,
              strokeStyle: "dashed",
              fillColor: "#00a86b",
              fillOpacity: 0.2,
            })

            newCircle.setMap(map)

            setMarkers([newMarker])
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
  }, [location, coordinates, cluster, onMapClick])

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>
}

export default KakaoMapCluster
