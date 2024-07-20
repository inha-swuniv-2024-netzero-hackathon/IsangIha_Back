import axios from "axios"

export const saveEvent = async (formData) => {
  try {
    const res = await axios.post(
      "http://ec2-54-180-141-4.ap-northeast-2.compute.amazonaws.com:8080/api/event",
      formData
    )
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}
