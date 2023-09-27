import React, { useState } from "react";
import endImg from "./icone_usuario.png";


function App() {

  const [image, setImage] = useState('');  

  const uploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
  }

  return (
    <div>

      <form onSubmit={uploadImage}>
        {image ? <img src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> : <img src={endImg} alt="Imagem" width="150" height="150" />}<br /><br />
        <input type="file" name="image" onChange={e => setImage(e.target.files[0])} /><br /><br />

      </form>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=rlHLlhjb2p8