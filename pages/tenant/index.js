import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import AllTenants from '../../src/modules/Tenants/AllTenants'

const TenantIndex = () => {
  return (
    <AdminLayout>
        <AllTenants/>
    </AdminLayout>
  )
}

export default TenantIndex