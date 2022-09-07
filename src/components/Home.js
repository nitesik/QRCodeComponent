import image from "./images/qr.png"
import "./styles.css"

function Home() {

  return (
    <div className="container">
      <img src={image} height="200" width="200" style={{borderRadius: "10px"}}/>
      <p className="sub-title">Improve your front-end skills by building projects</p>
      <p className="description">Scan the QR code to visit Frontend Mentor anf take your coding skills to the next level.</p>
    </div>
  )
}

export default Home;