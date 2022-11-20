import React from 'react'
import AdminLayout from '../../src/components/Layouts/AdminLayout'
import PageTitle from '../../src/components/PageTitle'
import AllInvoicePayments from '../../src/modules/Invoice/AllInvoicePayments'

const viewInvoicePayments = () => {
    return (
        <>
        <PageTitle title="Invoice Payments"/>
        <AdminLayout>
            <AllInvoicePayments />
        </AdminLayout>
        </>
    )
}

export default viewInvoicePayments