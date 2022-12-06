function StyledWithInnlineCSS() {
  const styleObject = {"backgroundColor": "var(--color-secondary"};

  return (
    <div className="container" style={styleObject}>
      <h2 className="title-font">Global CSS</h2>
      <p>This component is styled with global css</p>
    </div>
  )
}

export default StyledWithInnlineCSS;