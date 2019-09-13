export const saveToken = (loginUser) => {
    window.localStorage.setItem('token',loginUser['token'])
};

export const setSupplierData = (data) => {
    data = JSON.parse(data)
    window.VIC.company_name = data.company_name
    window.VIC.phone = data.phone
    window.VIC.street = data.street
    window.VIC.suburb = data.suburb
    window.VIC.state = data.state
    window.VIC.abn = data.abn
    window.localStorage.u_id = data._id
};