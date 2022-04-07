import axios from 'axios'

const BASE_URL = 'https://623c6d997efb5abea680b55e.mockapi.io/student';

const svService = {
    getSv: () => (
        axios({
            method: 'GET',
            url: BASE_URL,
        })
    ),
    detailSv: (id) => (
        axios({
            method: 'GET',
            url: `${BASE_URL}/${id}`,
        })
    ),
    deleSv: (id) => (
        axios({
            url: `${BASE_URL}/${id}`,
            method: 'DELETE',
        })
    ),
    addSv: (data) => (
        axios({
            method: 'POST',
            url: BASE_URL,
            data,
        })
    ),
    updateSv: (id, data) => (
        axios({
            method: 'PUT',
            url: `${BASE_URL}/${id}`,
            data,
        })
    )   
}

export default svService;