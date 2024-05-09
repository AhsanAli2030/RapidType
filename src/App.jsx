import FrontPage from "./Pages/Front_Page";
import React, { Suspense } from "react";
import Loading_Page from "./Pages/Loading_Page";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen  bg-[#323437]">
        <Suspense fallback={<Loading_Page />}>
          <FrontPage />
        </Suspense>
      </div>
    </>
  );
}
