import PropTypes from 'prop-types'
import Button from './Button'
const header = ({ title, onAdd , showAdd}) => {
    

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

header.defaultProps = {
    title: '.Task it',
}

header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default header
