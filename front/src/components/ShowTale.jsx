import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";
import EditTale from "./EditTale";
import { MyVerticallyCenteredModal } from "./Modal";

const URI = "http://localhost:8000/tale/";

export function ShowTale() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  const [tales, setTales] = useState([]);
  useEffect(() => {
    getTales();
  }, [tales]);

  //get tales
  const getTales = async () => {
    const res = await axios.get(URI);
    setTales(res.data);
  };

  //delete tale
  const deleteTale = async (id) => {
    axios.delete(`${URI}${id}`);
    getTales();
  };

  return (
    <>
      <section className="mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {tales.map((tale) => {
              return (
                <div className="cardT" key={tale.id}>
                  <div>
                    <img
                      height="50px"
                      src={tale.image}
                      alt={tale.title}
                      className=" rounded-t-2xl img"
                      onClick={() => setModalShow(tale.id)}
                    />
                  </div>
                  <div>
                    <h1 className="m-3 text-violet-600">
                      <b>{tale.title}</b>
                    </h1>
                    <button
                      onClick={() => {
                        deleteTale(tale.id);
                      }}
                    >
                      delete
                    </button>
                    <button onClick={() => setModalShow2(tale.id)}>Edit</button>
                  </div>
                  <MyVerticallyCenteredModal
                    key={tale.key}
                    {...tale}
                    show={modalShow === tale.id}
                    onHide={() => setModalShow(false)}
                  />
                  <EditTale
                    key={tale.key}
                    {...tale}
                    show={modalShow2 === tale.id}
                    onHide={() => setModalShow2(false)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
