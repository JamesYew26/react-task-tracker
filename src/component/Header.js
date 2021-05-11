import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()


    return (
        <header className='header'>
            <h1>{title}</h1>

            <body>
            {location.pathname === '/' && 
            <Button color={showAdd ? 'red' : 'green'} 
            text= {showAdd ? 'Close' : 'Add'}
            onClick={onAdd}/>}
            </body>
        </header>
        
    )
}
Header.defaultProps = {
    title:'Task Reminder'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    //color:'Blue', backgroundColor:'Black'
}
export default Header
