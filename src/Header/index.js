import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='d-flex flex-column position-fixed justify-content-around' style={{   
            height: '14%',
            width: '10%',
            left: 0,
            top: '27.5%',
        }}>
            <NavLink exact activeClassName='text-danger' className='ml-lg-3 ml-md-2' to='/'>Home</NavLink>
            <NavLink activeClassName='text-danger' className='ml-lg-3 ml-md-2' to='/qlsv'>List Student</NavLink>
            {/* <NavLink activeClassName='text-danger' className='ml-lg-3 ml-md-2' to='/detail'>Detail Student</NavLink> */}
        </header>
    )
}