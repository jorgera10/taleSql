import axios from "axios";
import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const URI = "http://localhost:8000/tale/";

export const CreateTable = () => {
  const [title, setTitle] = useState("");
  const [clasification, setClasification] = useState("");
  const [price, setPrice] = useState(0);
  const [publication, setPublication] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title, clasification, price, publication, image });
  };

  return (
    <div>
      <h1 className="text-violet-600 text-7xl drop-shadow-2xl   ">
        Fantastic Tales
      </h1>
      <Form onSubmit={handleSubmit}>
        <div className="mb-3">
          <InputGroup className="flex flex-nowrap">
            <Form.Control
              placeholder="Title"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              value={title}
              className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control
              placeholder="Clasificacion"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              value={clasification}
              className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
              onChange={(e) => setClasification(e.target.value)}
            />
            <Form.Control
              placeholder="Precio"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              value={price}
              className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Control
              placeholder="Publicacion"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="date"
              value={publication}
              className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
              onChange={(e) => setPublication(e.target.value)}
            />
            <Form.Control
              placeholder="URL de la imagen"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              value={image}
              className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
              onChange={(e) => setImage(e.target.value)}
            />
          </InputGroup>
        </div>
        <Button type="submit" variant="outline-primary">
          Añadir
        </Button>
      </Form>
    </div>
  );
};
