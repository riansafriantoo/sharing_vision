import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add</strong> <small> form</small>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="email" id="inputEmail3" />
                </CCol>
              </CRow>
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Category</legend>
                <CCol sm={10}>
                  <CFormSelect id="autoSizingSelect">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
              </fieldset>
              <CRow className="mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
                </div>
              </CRow>
              <CButton type="submit">Submit</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
