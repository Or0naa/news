import Search from '@/components/Search'
import React from 'react'

export default async function layout({children}) {
  return (<>
                  <Search/>
                  {children}
  </>
  )
}
