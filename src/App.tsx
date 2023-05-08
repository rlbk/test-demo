import './App.css'
import NavBar from './components/NavBar'
import { ComponentSeperator } from './components/Common'
import Search from './components/Search'
import { ResultModal } from './components/Results'
import { ReactElement, useState } from 'react'

function App(): ReactElement {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("NIT Warangal");
  const [searchedLocation, setSearchedLocation] = useState<string>("Karnata")
  const navItems = {
    logoTitle: 'startup',
    navMenu: ['about us']
  }

  return (
    <>
      <header >
        <NavBar logoTitle={navItems.logoTitle} navMenu={navItems.navMenu} />
      </header>
      <main className='w-[90%] md:w-[80%] mx-[auto] my-10'>
        <Search changeKeyword={setSearchedKeyword} changeLocation={setSearchedLocation} />
        <ComponentSeperator title="Result" />
        <ResultModal searchedKeyword={searchedKeyword} searchedLocation={searchedLocation} />
        <ResultModal searchedKeyword={searchedKeyword} searchedLocation={searchedLocation} />

      </main>
      <footer></footer>
    </>
  )
}

export default App
