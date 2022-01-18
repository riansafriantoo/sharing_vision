import React, { lazy } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import { DocsCallout, DocsExample } from 'src/components'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'USA', flag: cifUs },
    usage: {
      value: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Mastercard', icon: cibCcMastercard },
    activity: '10 sec ago',
  },
  {
    avatar: { src: avatar2, status: 'danger' },
    user: {
      name: 'Avram Tarasios',
      new: false,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Brazil', flag: cifBr },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'info',
    },
    payment: { name: 'Visa', icon: cibCcVisa },
    activity: '5 minutes ago',
  },
  {
    avatar: { src: avatar3, status: 'warning' },
    user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
    country: { name: 'India', flag: cifIn },
    usage: {
      value: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'warning',
    },
    payment: { name: 'Stripe', icon: cibCcStripe },
    activity: '1 hour ago',
  },
  {
    avatar: { src: avatar4, status: 'secondary' },
    user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
    country: { name: 'France', flag: cifFr },
    usage: {
      value: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'danger',
    },
    payment: { name: 'PayPal', icon: cibCcPaypal },
    activity: 'Last month',
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Agapetus Tadeáš',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Spain', flag: cifEs },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'primary',
    },
    payment: { name: 'Google Wallet', icon: cibCcApplePay },
    activity: 'Last week',
  },
  {
    avatar: { src: avatar6, status: 'danger' },
    user: {
      name: 'Friderik Dávid',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Poland', flag: cifPl },
    usage: {
      value: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Amex', icon: cibCcAmex },
    activity: 'Last week',
  },
]

const Accordion = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">Title</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Category</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>Kategori</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton color="primary">Edit</CButton>
                        <CButton color="secondary">Delete</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Accordion
