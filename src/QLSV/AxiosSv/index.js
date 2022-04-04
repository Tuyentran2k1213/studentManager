import axios from 'axios'

const BASE_URL = 'https://623c6d997efb5abea680b55e.mockapi.io/student';

const svService = {
    getSv: () => (
        axios({
            method: 'GET',
            url: BASE_URL,
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
            data: data,
        })
    )   
}

export default svService;