import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import AllInvoicePayments from '../../src/modules/Invoice/AllInvoicePayments'

const viewInvoicePayments = () => {
    return (
        <AdminLayout>
            <AllInvoicePayments />
        </AdminLayout>
    )
}

export default viewInvoicePayments