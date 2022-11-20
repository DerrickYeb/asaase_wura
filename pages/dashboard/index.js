import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import PageTitle from '../../src/components/PageTitle'

const index = () => {
  return (
    <>
        <PageTitle title="Dashboard"/>
    <AdminLayout>
        <div>
            <h1>Dashboard</h1>
        </div>
    </AdminLayout>
    </>
  )
}

export default index