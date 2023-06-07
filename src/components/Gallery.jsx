import { useState } from "react"

function Gallery({menuItems}) {
  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  const slide = {
    margin: "5px auto",
    width: "60vw",
    minWidth: "400px",
    height: "80vh",
    minHeight: "300px",
    backgroundImage: `url(${menuItems[currentPicIndex].pic})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "5px solid black",
    borderRadius: "10px",
  }

  const handleClickForward = () => {
    if (currentPicIndex === menuItems.length -1) {
      setCurrentPicIndex(0);
    } else {
      setCurrentPicIndex(currentPicIndex + 1);
    }
  }

  const handleClickBackward = () => {
    if (currentPicIndex === 0) {
      setCurrentPicIndex(menuItems.length - 1);
    } else {
      setCurrentPicIndex(currentPicIndex - 1);
    }
  }

  return (
    <div className="carousel-container">
      <p className="carousel-name">{menuItems[currentPicIndex].name}</p>
      <div style={slide}></div>
      <button onClick={handleClickForward} className="carousel-forward-btn">&#8656;</button>
      <button onClick={handleClickBackward} className="carousel-back-btn">&#8658;</button>
    </div>
  )
  }
export default Gallery

