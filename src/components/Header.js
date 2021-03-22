import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Header = ({ title, onAdd, showAddTask }) => { //props == {{ something }}
    return (
    <header className="header">
        <h3>{title}</h3>
        { !showAddTask ? <button className="btn" onClick={onAdd}>Add</button> : <FaTimes style = {{ color: 'black', cursor: 'pointer' }} onClick={onAdd}/>}
        
    </header>
    )
}

Header.defaultProps = {
    title: 'Event Tracker',
}
Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header