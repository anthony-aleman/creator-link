import { NextPage } from 'next'


const SearchBar: NextPage = ({ }) => {
  return (
    <div className='max-w-xl mx-auto my-8'>
      <input
        type="text"
        placeholder="Search by niche"
        className="w-full p-3 border rounded shadow"
      />
    </div>
  )
}

export default SearchBar