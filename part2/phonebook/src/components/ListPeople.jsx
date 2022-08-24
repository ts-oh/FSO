const ListPeople = (props) => {
  const { listPersons } = props

  return (<ul className='item-list'>{listPersons()}</ul>)
}

export default ListPeople
