import React, { Component } from 'react'
import './App.css'
import RenderTrackerDemo from './rerenders/RenderTrackerDemo'
import ChildDemo from './memoization/use-callback/ChildDemo'
import UsersSortingDemo from './memoization/use-memo/UsersSortingDemo'

const App = () => {
  return (
    <>
      <UsersSortingDemo />
    </>

  )
}

export default App