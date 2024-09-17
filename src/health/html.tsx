export { htmlHealth };

import { render } from 'preact-render-to-string';


const css = `
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
`


function HealthComponent() {
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
      <h1 style={h1Style}>Status</h1>
      <p>ok</p>
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
