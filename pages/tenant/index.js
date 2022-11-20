import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import PageTitle from '../../src/components/PageTitle'
import AllTenants from '../../src/modules/Tenants/AllTenants'

const TenantIndex = () => {
  return (
    <>
    <PageTitle title={"Tenants"}/>
    <AdminLayout>
        <AllTenants/>
    </AdminLayout>
    </>
  )
}

export default TenantIndex