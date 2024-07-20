import React from "react"
import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()

  // 현재 경로를 콘솔에 출력하여 확인
  console.log("Current location:", location.pathname)

  // 미디어 쿼리를 적용할 라우팅을 설정
  const mediaQueryPaths = ["/authority", "/", "/user", "/user/qr"]

  // 현재 location이 미디어 쿼리 적용 대상인지 확인
  const applyMediaQuery =
    mediaQueryPaths.includes(location.pathname) ||
    /^\/user\/event\/\d+$/.test(location.pathname)

  return (
    <>
      <div className={applyMediaQuery ? "media-query" : "not-media-query"}>
        <div id="root">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
