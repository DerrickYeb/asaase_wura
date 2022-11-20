import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import AllPayments from '../../src/modules/Payments/AllPayments'

const PaymentIndex = () => {
  return (
    <AdminLayout>
        <AllPayments/>
    </AdminLayout>
  )
}

export default PaymentIndex