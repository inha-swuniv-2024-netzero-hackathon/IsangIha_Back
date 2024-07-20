import "../../assets/css/admin.css"
// components
import AdminHeader from "./AdminHeader"
import Sidebar from "./Sidebar"
import RequestFlow from "./RequestFlow"
import Monitor from "./Monitor"
// hooks
import { useState } from "react"

function Admin() {
  const [header, setHeader] = useState("신청하기")

  return (
    <section className="admin">
      <AdminHeader title={header} />
      <div className="main direction-row">
        <Sidebar header={header} setHeader={setHeader} />
        <div className="admin-content">
          <Content header={header} />
        </div>
      </div>
    </section>
  )
}

const Content = (props) => {
  if (props.header === "신청하기" || props.header === "수거함 위치 등록")
    return <RequestFlow />
  else if (props.header === "모니터링") return <Monitor />
  else return <div>no content</div>
}

export default Admin
