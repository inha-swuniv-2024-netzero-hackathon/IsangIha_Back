import React, { useState, useEffect } from "react"
import KakaoMapCluster from "../../components/KakaoMapCluster"

const ClusterSetting = ({ formData, setFormData, nextStep }) => {
  const [userLocation, setUserLocation] = useState(null)
  const [locationError, setLocationError] = useState(null)

  useEffect(() => {
    const TEMP_LOCATION_INHA = {latitude: 37.4509322, longitude: 126.6543828}
    setUserLocation(TEMP_LOCATION_INHA)
    return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          setLocationError("위치 정보를 받아올 수 없습니다.")
          console.error("위치 받아오기 오류", error)
        }
      )
    } else {
      setLocationError("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
      console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
    }
  }, [])

  const handleClusterChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleMapClick = (coord) => {
    setFormData({
      ...formData,
      festivalLocation: coord,
    })
  }

  const handleNext = () => {
    nextStep()
  }

  return (
    <div className="input-form">
      <label>
        클러스터 반경 (미터):
        <input
          type="number"
          name="cluster"
          value={formData.cluster}
          onChange={handleClusterChange}
        />
      </label>
      <div className="map-container">
        {userLocation ? (
          <KakaoMapCluster
            location={userLocation}
            coordinates={
              formData.festivalLocation ? [formData.festivalLocation] : []
            }
            cluster={formData.cluster}
            onMapClick={handleMapClick}
          />
        ) : locationError ? (
          <p>{locationError}</p>
        ) : (
          <p>현재 위치를 받아오는 중...</p>
        )}
      </div>
      <button type="button" onClick={handleNext}>
        다음
      </button>
    </div>
  )
}

export default ClusterSetting
