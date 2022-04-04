import ReactLoading from 'react-loading'

export default function LoadingAnimation() {
    return(
        <div className='d-flex justify-content-center align-content-center position-fixed text-light w-100 h-100' style={{
            top: 0,
            left: 0,
            backgroundColor: '#343a4096',
            zIndex: 99,
        }}>
            <div className='position-absolute' style={{
                top: '30%'
            }}>
            <ReactLoading type={'bars'} color={'#3cbe59'} height={200} width={200} />
            <p className='text-center font-weight-bold form-control-lg'>Loading...</p>
            </div>
        </div>
    )
}