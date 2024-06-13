import React from 'react'

export default function Home() 
{
  return (
<div className="container py-4" id="home">
    <div className="bg-body-tertiary p-5 rounded">
        <div className="col-sm-8 py-5 mx-auto">
            <h1 className="display-5 fw-normal">Welcome to Manus React Application</h1>
            <p className="fs-5">
               This React application is sponsored by frustration. 
            </p>
            <p>
                I stole these React components and pages to display data fetched from below remote WebApi
            </p>
            <p>
                <a className="btn btn-primary" href="https://appmusicwebapinet8.azurewebsites.net/swagger/index.html" role="button">👉AppMusic WebApi👈</a>
            </p>
        </div>
    </div>
</div>
  )
}
