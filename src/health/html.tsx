export { htmlHealth };

import { render } from 'preact-render-to-string';

import { health } from '../modules';


const css = `
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
`


function HealthComponent() {
  const response = health()

  const divStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
  }

  const h1Style = {
    fontSize: "2em",
    margin: "0",
  }

  return (
    <div style={divStyle}>
      <h1 style={h1Style}>{response.status}</h1>
      {response.message && <p>{response.message}</p>}
      {response.components && (
        <ul>
          {Object.entries(response.components).map(([name, component]) => (
            <li key={name}>
              <strong>{name}</strong>: {component.status}
              {component.message && <p>{component.message}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


function htmlHealth() {
  return render(
    <html>
      <head>
        <title>Status</title>
        <style>{css}</style>
      </head>
      <body>
        <HealthComponent />
      </body>
    </html>
  )
}
