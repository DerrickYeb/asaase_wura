import Head from 'next/head'
import React from 'react'

const PageTitle = ({title}) => {
  return (
    <Head>
        <title>Asaase Wura - {title}</title>
    </Head>
  )
}

export default PageTitle