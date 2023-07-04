import React from 'react'

export const TaskBar = (prop) => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">WriteBuddy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">About</a>
        </li> 
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input " onClick={prop.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label className="form-check-label  " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
{/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked></input>
  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div> */}
{/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled></input>
  <label className="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div> */}
{/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled></input>
  <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div> */}
    </div>
  </div>
</nav></>
  )
}
