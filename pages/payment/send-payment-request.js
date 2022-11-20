import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import PaymentRequest from '../../src/modules/Payments/PaymentRequest'

const request = () => {
  return (
    <AdminLayout>
        <PaymentRequest/>
    </AdminLayout>
  )
}

export default request