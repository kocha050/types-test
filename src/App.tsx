import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="container text-center mt-5">
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
)

const Login = () => {
  return (
    <div>
      <h1>ログイン</h1>
      <form>
        ID：
        <label>
          <input type="text" name="name" />
        </label>
      </form>
      <form>
        PassWord：
        <label>
          <input type="text" name="name" />
        </label>
      </form>
      <a className="btn login-button" href="/home">ログイン</a>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <div>
        <h1>４コマリレー</h1>
      </div>
      <div>
        <p>ここに画像</p>
        <p><Link to="/about">Aboutへ</Link></p>
      </div>
    </div>

  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

const MyCounter = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  )
}

export default App