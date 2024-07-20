// import React, { useEffect, useRef } from "react"

// const KakaoMapAdmin = ({ location, coordinates, onMapClick }) => {
//   const mapRef = useRef(null)

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
//             radius: location.cluster,
//             strokeWeight: 2,
//             strokeColor: "#00a86b",
//             strokeOpacity: 1,
//             strokeStyle: "dashed",
//             fillColor: "#00a86b",
//             fillOpacity: 0.2,
//           }).setMap(map)

//           coordinates.forEach((coord) => {
//             new window.kakao.maps.Marker({
//               position: new window.kakao.maps.LatLng(
//                 coord.latitude,
//                 coord.longitude
//               ),
//               map: map,
//               image: new window.kakao.maps.MarkerImage(
//                 "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_blue.png",
//                 new window.kakao.maps.Size(32, 32),
//                 {
//                   offset: new window.kakao.maps.Point(16, 32),
//                 }
//               ),
//             })
//           })

//           window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
//             const latlng = mouseEvent.latLng
//             onMapClick({
//               latitude: latlng.getLat(),
//               longitude: latlng.getLng(),
//             })

//             new window.kakao.maps.Marker({
//               position: latlng,
//               map: map,
//               image: new window.kakao.maps.MarkerImage(
//                 "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_blue.png",
//                 new window.kakao.maps.Size(32, 32),
//                 {
//                   offset: new window.kakao.maps.Point(16, 32),
//                 }
//               ),
//             })
//           })
//         })
//       }
//     }
//     document.head.appendChild(script)
//   }, [location, coordinates, onMapClick])

//   return <div id="map" style={{ width: "100%", height: "500px" }}></div>
// }

// export default KakaoMapAdmin

// import React, { useEffect, useRef } from "react"

// const KakaoMapAdmin = ({ festivalLocation, coordinates, onMapClick }) => {
//   const mapRef = useRef(null)

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
//               festivalLocation.latitude,
//               festivalLocation.longitude
//             ),
//             level: 3,
//           }
//           const map = new window.kakao.maps.Map(container, options)
//           mapRef.current = map

//           // 축제 장소 마커
//           const starMarkerPosition = new window.kakao.maps.LatLng(
//             festivalLocation.latitude,
//             festivalLocation.longitude
//           )
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
//             radius: festivalLocation.cluster,
//             strokeWeight: 2,
//             strokeColor: "#00a86b",
//             strokeOpacity: 1,
//             strokeStyle: "dashed",
//             fillColor: "#00a86b",
//             fillOpacity: 0.2,
//           }).setMap(map)

//           coordinates.forEach((coord) => {
//             new window.kakao.maps.Marker({
//               position: new window.kakao.maps.LatLng(
//                 coord.latitude,
//                 coord.longitude
//               ),
//               map: map,
//             })
//           })

//           window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
//             const latlng = mouseEvent.latLng
//             onMapClick({
//               latitude: latlng.getLat(),
//               longitude: latlng.getLng(),
//             })

//             new window.kakao.maps.Marker({
//               position: latlng,
//               map: map,
//             })
//           })
//         })
//       }
//     }
//     document.head.appendChild(script)
//   }, [festivalLocation, coordinates, onMapClick])

//   return <div id="map" style={{ width: "100%", height: "500px" }} />
// }

// export default KakaoMapAdmin

// import React, { useEffect, useRef } from "react"

// const KakaoMapAdmin = ({ location, coordinates, onMapClick }) => {
//   const mapRef = useRef(null)

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
//             radius: location.cluster,
//             strokeWeight: 2,
//             strokeColor: "#00a86b",
//             strokeOpacity: 1,
//             strokeStyle: "dashed",
//             fillColor: "#00a86b",
//             fillOpacity: 0.2,
//           }).setMap(map)

//           coordinates.forEach((coord) => {
//             new window.kakao.maps.Marker({
//               position: new window.kakao.maps.LatLng(
//                 coord.latitude,
//                 coord.longitude
//               ),
//               map: map,
//             })
//           })

//           window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
//             const latlng = mouseEvent.latLng
//             onMapClick({
//               latitude: latlng.getLat(),
//               longitude: latlng.getLng(),
//             })

//             new window.kakao.maps.Marker({
//               position: latlng,
//               map: map,
//             })
//           })
//         })
//       }
//     }
//     document.head.appendChild(script)
//   }, [festivalLocation, coordinates, onMapClick])

//   return <div id="map" style={{ width: "100%", height: "500px" }} />
// }

// export default KakaoMapAdmin

import React, { useEffect, useRef } from "react"

const KakaoMapAdmin = ({ location, coordinates, onMapClick }) => {
  const mapRef = useRef(null)

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

          // 축제 장소 마커
          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude
            ),
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
            center: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude
            ),
            radius: location.cluster,
            strokeWeight: 2,
            strokeColor: "#00a86b",
            strokeOpacity: 1,
            strokeStyle: "dashed",
            fillColor: "#00a86b",
            fillOpacity: 0.2,
          }).setMap(map)

          coordinates.forEach((coord) => {
            new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(
                coord.latitude,
                coord.longitude
              ),
              map: map,
            })
          })

          window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
            const latlng = mouseEvent.latLng
            onMapClick({
              latitude: latlng.getLat(),
              longitude: latlng.getLng(),
            })

            new window.kakao.maps.Marker({
              position: latlng,
              map: map,
            })
          })
        })
      }
    }
    document.head.appendChild(script)
  }, [location, coordinates, onMapClick])

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>
}

export default KakaoMapAdmin
