import React, { useState, useEffect } from 'react'
import EmployeeCard from './components/EmployeeCard'
import SearchForm from './components/SeachForm'
import Wrapper from './components/Wrapper'
import Col from './components/Col'
import Loading from './components/loading/Loading'
import API from './utils/API'
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const fetchEmployees = async () => {
    setLoading(true)
    //fetch people
    try {
      await API.search().then((res) => {
        console.log(res)
        setEmployees(
          res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            city: e.location.city,
            key: i,
          }))
        )
        setSearchResults(
          res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            city: e.location.city,
            key: i,
          }))
        )
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const searchHandler = (search) => {
    console.log('Search', search)
    setSearch(search)

    if (search !== '') {
      const newEmployeeList = employees.filter((employee) => {
        return (
          Object.values(employee)
            .join(' ')
            // .toString()
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      })
      setSearchResults(newEmployeeList)
    } else {
      setSearchResults(employees)
    }
  }

  useEffect(() => {
    const getAllEmployees = async () => {
      const allEmployees = await fetchEmployees()
      if (allEmployees) setEmployees(allEmployees)
    }
    getAllEmployees()
  }, [])

  useEffect(() => {}, [employees])

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await searchHandler(search);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <Col size='md-4'>
            <h2>Employee Directory</h2>

            <SearchForm searchKeyword={searchHandler} term={search} />
          </Col>
        </div>

        <div className='row'>
          <Col size='md-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>

              {searchResults.map((e) => {
                return (
                  <EmployeeCard
                    picture={e.picture}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    email={e.email}
                    phone={e.phone}
                    city={e.city}
                    key={e.key}
                  />
                )
              })}
            </table>
          </Col>
        </div>
      </div>
    </Wrapper>
  )
}

export default App
