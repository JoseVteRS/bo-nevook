import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Usuarios</h4>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
            </CCol>

            <CCol sm='12'>
              <h2>Hola </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quas, non, harum animi in magni labore fugit laudantium veniam adipisci delectus facere sunt. Assumenda, distinctio. Facere voluptates sapiente, libero molestias nesciunt dolorum ipsum delectus odit labore incidunt amet illo sed illum cum omnis culpa reiciendis sequi dolor, natus officia est.</p>
            </CCol>

          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <p>Footer Card</p>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
