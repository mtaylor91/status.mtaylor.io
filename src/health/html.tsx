export { htmlHealth };

import { render } from 'preact-render-to-string';

import { health } from '../modules';
import { Status } from '../status';
import type { Health } from '../status';


const css = `
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
`


function healthColor(status: Status) {
  switch (status) {
    case Status.Healthy:
      return "#00ff00"
    case Status.Degraded:
      return "#ffff00"
    case Status.Unhealthy:
      return "#ff0000"
  }
}


function liStyle(component: Health) {
  return {
    color: healthColor(component.status),
  }
}


function HealthComponent(response: Health) {
  const divStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    color: healthColor(response.status),
  }

  const h1Style = {
    fontSize: "2em",
    margin: "0",
  }

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
  }

  return (
    <div style={divStyle}>
      <h1 style={h1Style}>{response.status}</h1>
      {response.message && <p>{response.message}</p>}
      {response.components && (
        <ul style={ulStyle}>
          {Object.entries(response.components).map(([name, component]) => (
            <li key={name} style={liStyle(component)}>
              <strong>{name}</strong>: {component.status}
              {component.message && <p>{component.message}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


async function htmlHealth() {
  const response = await health()
  return render(
    <html>
      <head>
        <title>Status</title>
        <style>{css}</style>
      </head>
      <body>
        <HealthComponent {...response} />
      </body>
    </html>
  )
}
