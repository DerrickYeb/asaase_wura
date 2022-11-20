import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import AddTenant from '../../src/modules/Tenants/AddTenant'

const add = () => {
  return (
    <AdminLayout>
        <AddTenant/>
        </AdminLayout>
  )
}

export default add