const Filter = (props) => {
  const { search, setSearch } = props
  const handleSearchName = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      filter showin with{' '}
      <input type='search' value={search} onChange={handleSearchName} />
    </div>
  )
}

export default Filter





