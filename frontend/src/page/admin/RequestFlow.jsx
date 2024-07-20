import React, { useState } from "react"
import ClusterSetting from "./ClusterSetting"
import EventRequest from "./EventRequest"

const RequestFlow = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    enterpriseName: "",
    eventName: "",
    headcount: "",
    containers: [
      {
        containerType: "small_cup",
        label: "Small Cup",
        quantity: 0,
        checked: false,
      },
      {
        containerType: "large_cup",
        label: "Large Cup",
        quantity: 0,
        checked: false,
      },
      {
        containerType: "small_dish",
        label: "Small Dish",
        quantity: 0,
        checked: false,
      },
      {
        containerType: "large_dish",
        label: "Large Dish",
        quantity: 0,
        checked: false,
      },
    ],
    startDate: "",
    endDate: "",
    deliveryDate: "",
    collectionDate: "",
    cluster: "",
    meeting: false,
    meetingDate: "",
    coordinates: [],
    festivalLocation: null, // 추가된 필드
  })

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div>
      {step === 1 && (
        <ClusterSetting
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <EventRequest
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
        />
      )}
    </div>
  )
}

export default RequestFlow
