import axios from 'axios'

export const saveToken = (loginUser) => {
    window.localStorage.setItem('token',loginUser['token'])
};

export const setSupplierData = (data) => {
    data = data
    window.VIC.company_name = data.company_name
    window.VIC.phone = data.phone
    window.VIC.street = data.street
    window.VIC.suburb = data.suburb
    window.VIC.state = data.state
    window.VIC.abn = data.abn
    window.localStorage.u_id = data._id
};

export const setVerifierData = (data) => {
    
    data = data
    window.VIC.data = data
    window.VIC.company_name = data.company_name
    window.VIC.activity_type = data.activity_type
    window.VIC.abn = data.abn
    window.localStorage.u_id = data._id
};

export const getApplications = (props) => {
    axios({
        method: 'get',
        url: `http://localhost:8000/api/supplier/applications/${window.localStorage.u_id}`
      }).then(res => {
          const data = props.location.state
          data.applications = res.data.applications
          const path = {
            pathname: '/viewforms',
            state: data,
          }
          props.history.push(path)
      }).catch(err => {
          console.log(err)
      });
}