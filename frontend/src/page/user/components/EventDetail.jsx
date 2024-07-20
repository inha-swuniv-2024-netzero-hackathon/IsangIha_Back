import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import KakaoMap from "../../../components/KakaoMap" // 경로를 실제 경로로 수정
import Loading from "../../../components/Loading"
import axios from "axios"

const EventDetail = () => {
  const { id } = useParams()
  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-54-180-141-4.ap-northeast-2.compute.amazonaws.com:8080/api/events/${id}`
        )
        setEventData(response.data)
      } catch (error) {
        console.error("Error fetching event data:", error)
      }
    }

    fetchEventData()
  }, [id])

  const calculateCarbonReduction = (headcount) => {
    const carbonPerPerson = 0.5 // Example value in kg
    return (headcount * carbonPerPerson).toFixed(2)
  }

  return (
    <div className="event-container">
      <h1>이벤트 정보</h1>
      {eventData ? (
        <>
          <KakaoMap
            location={eventData.coordinates[0]}
            coordinates={eventData.coordinates}
            cluster={eventData.cluster}
          />
          <div className="event-details">
            <p>회사명: {eventData.enterpriseName}</p>
            <p>참가 인원: {eventData.headcount}</p>
            <p>시작 날짜: {new Date(eventData.startDate).toLocaleString()}</p>
            <p>종료 날짜: {new Date(eventData.endDate).toLocaleString()}</p>
          </div>
          <div className="stat-container">
            <p>
              이 이벤트는 총{" "}
              <strong>
                {calculateCarbonReduction(eventData.headcount)} kg
              </strong>
              의 탄소 배출량을 절감하고 있습니다!
            </p>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default EventDetail
