// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react';
import './App.css';
import mainLogo from './assets/web-logo-w.png'

function App() {
  return (
    <div className="landing-container">
      <div className="centered-box">
        <img src={mainLogo}/>
        <div className="spacer-39px"></div>
        <h1>Get Ready!</h1>
        <div className="spacer-39px"></div>
        <p>We are working on something really cool.</p>
        <div className="spacer-39px"></div>
        <div className="spacer-39px"></div>
        <a href='mailto:clayton@theestateesq.com'>Contact Us</a>
        <p><i className="fas fa-home"></i></p>
      </div>
    </div>
  );
}

export default App;
