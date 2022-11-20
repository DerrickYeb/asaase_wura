import React, { useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Card from '../../components/Card'

// img
import shap1 from '../../assets/images/shapes/01.png'
import shap2 from '../../assets/images/shapes/02.png'
import shap3 from '../../assets/images/shapes/03.png'
import shap4 from '../../assets/images/shapes/04.png'
import shap5 from '../../assets/images/shapes/05.png'
import shap6 from '../../assets/images/shapes/06.png'
import Link from 'next/link'
import useSWR from 'swr'
import { getAxiosInvoice } from '../../hooks/axiosRequest'
import { useRouter } from 'next/router'


const userlist = [
   {
      img: `${shap1}`,
      name: 'Anna Sthesia',
      phone: '(760) 756 7568',
      email: 'annasthesia@gmail.com',
      country: 'USA',
      status: 'Active',
      company: 'Acme Corporation',
      joindate: '2019/12/01',
      color: 'bg-primary'
   },
   {
      img: `${shap2}`,
      name: 'Brock Lee',
      phone: '+62 5689 458 658',
      email: 'brocklee@gmail.com',
      country: 'Indonesia',
      status: 'Active',
      company: 'Soylent Corp',
      joindate: '2019/12/01',
      color: 'bg-primary'
   },
   {
      img: `${shap3}`,
      name: 'Dan Druff',
      phone: '+55 6523 456 856',
      email: 'dandruff@gmail.com',
      country: 'Brazil',
      status: 'Pending',
      company: 'Acme Corporation',
      joindate: '2019/12/01',
      color: 'bg-warning'
   },
   {
      img: `${shap4}`,
      name: 'Hans Olo',
      phone: '+91 2586 253 125',
      email: 'hansolo@gmail.com',
      country: 'India',
      status: 'Inactive',
      company: 'Vehement Capital',
      joindate: '2019/12/01',
      color: 'bg-danger'
   },
   {
      img: `${shap5}`,
      name: 'Lynn Guini',
      phone: '+27 2563 456 589',
      email: 'lynnguini@gmail.com',
      country: 'Africa',
      status: 'Active',
      company: 'Massive Dynamic',
      joindate: '2019/12/01',
      color: 'bg-primary'
   },
   {
      img: `${shap6}`,
      name: 'Eric Shun',
      phone: '+55 25685 256 589',
      email: 'ericshun@gmail.com',
      country: 'Brazil',
      status: 'Pending',
      company: 'Globex Corporation',
      joindate: '2019/12/01',
      color: 'bg-warning'
   },
   {
      img: `${shap3}`,
      name: 'aaronottix',
      phone: '(760) 756 7568',
      email: 'budwiser@ymail.com',
      country: 'USA',
      status: 'Hold',
      company: 'Acme Corporation',
      joindate: '2019/12/01',
      color: 'bg-info'
   },
   {
      img: `${shap5}`,
      name: 'Marge Arita',
      phone: '+27 5625 456 589',
      email: 'margearita@gmail.com',
      country: 'Africa',
      status: 'Complite',
      company: 'Vehement Capital',
      joindate: '2019/12/01',
      color: 'bg-success'
   },
   {
      img: `${shap2}`,
      name: 'Bill Dabear',
      phone: '+55 2563 456 589',
      email: 'billdabear@gmail.com',
      country: 'Brazil',
      status: 'Active',
      company: 'Massive Dynamic',
      joindate: '2019/12/01',
      color: 'bg-primary'
   }
]


const AllInvoicePayments = () => {
   const router = useRouter()
   const [data, setData] = React.useState([])

   // const {data} = useSWR(getAxiosInvoice("paymentrequest"), { refreshInterval: 1000 });

   const InvoicePayments = async () => {
      await getAxiosInvoice("paymentrequest").then(res => {
         setData(res.data)
         console.log(res.data)
         console.log(res)
      }).catch(err => {
         console.log(err)
      })
   }

   useEffect(() => {
      InvoicePayments()
   }, [])

   return (
      <>
         <div>
            <Row>
               <Col sm="12">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           <h4 className="card-title">Invoice Payment List</h4>
                        </div>
                     </Card.Header>
                     <Card.Body className="px-0">
                        <div className="table-responsive">
                        {/* <Link href='de'> */}
                           <table cursor="pointer"  id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                              <thead>
                                 <tr className="ligth">
                                    <th>Invoice ID</th>
                                    <th>Amount</th>
                                    <th>Tenant</th>
                                    <th>Requested</th>
                                    <th>Invoice Number</th>
                                    {/* <th>Location</th> */}
                                    <th>Status</th>
                                    {/* <th>Date Purchased</th> */}
                                    {/* <th min-width= "100px">Action</th> */}
                                 </tr>
                              </thead>
                              <tbody>
                                    {
                                       data?.map((item, idx) => (
                                          <tr key={item.id}  onClick={() => router.push(`/invoice/${item.id}`)}>
                                             <th>{item.id}</th>
                                             {/* <td className="text-center"><Image className="bg-soft-primary rounded img-fluid avatar-40 me-3" src={item.img} alt="profile"/></td> */}
                                             <td>{item.amount}</td>
                                             <td>{`${item.customer.first_name} ${item.customer.last_name}`}</td>
                                             <td>{item.created_at}</td>
                                             <td>{item.invoice_number}</td>
                                             <td>{item.status}</td>
                                          </tr>
                                       ))}
                              </tbody>
                           </table>
                           {/* </Link> */}
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
   )
}

export default AllInvoicePayments