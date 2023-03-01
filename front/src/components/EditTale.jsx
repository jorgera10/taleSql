import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, InputGroup, Modal, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const URI = "http://localhost:8000/tale/";

function EditTale(props) {
  const [title, setTitle] = useState("");
  const [clasification, setClasification] = useState("");
  const [price, setPrice] = useState(0);
  const [publication, setPublication] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      clasification: clasification,
      price: price,
      publication: publication,
      image: image,
    });
    console.log("actualizado");
  };

  useEffect(() => {
    getTaleById();
  }, []);

  const getTaleById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setClasification(res.data.clasification);
    setPrice(res.data.price);
    setPublication(res.data.publication);
    setImage(res.data.image);
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            editar: {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex">
          <Form onSubmit={update}>
            <div className="mb-3">
              <InputGroup className="flex flex-wrap">
                <Form.Control
                  placeholder="Title"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
                />
                <Form.Control
                  placeholder="Clasificacion"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="text"
                  value={clasification}
                  onChange={(e) => setClasification(e.target.value)}
                  className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
                />
                <Form.Control
                  placeholder="Precio"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
                />
                <Form.Control
                  placeholder="Publicacion"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="date"
                  value={publication}
                  onChange={(e) => setPublication(e.target.value)}
                  className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
                />
                <Form.Control
                  placeholder="URL de la imagen"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-10 bg-zinc-800 border-spacing-16 m-5 mx-8 my-3"
                />
              </InputGroup>
            </div>
            <Button type="submit" variant="outline-primary">
              Editar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditTale;
