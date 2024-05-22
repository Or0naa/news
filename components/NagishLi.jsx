"use client"

import Script from "next/script"
import { Suspense } from "react"

const Comp = ()=> <div id="nagishli-container" className="flex items-center">
    <Script id="nagishli-config" strategy="beforeInteractive">
      {`
      nagishli_config = {
        color: "blue",
        language: "he"
      };
    `}
    </Script>
    <Script
      src="/nagishli_beta.js?v=3.0b"
      charset="utf-8"
      strategy="beforeInteractive"
      defer
    />
  </div>



export default function NagishLi() {
  return (
    <Suspense fallback={null}>
        <Comp/>
    </Suspense>
  )
}
