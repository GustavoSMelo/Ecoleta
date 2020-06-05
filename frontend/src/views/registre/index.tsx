import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Container, ContainerError, ContainerSucess } from "./style";
import Header from "../../components/header";
import { Map, TileLayer, Marker } from "react-leaflet";
import api from "../../api";
import axios from "axios";
import { LeafletMouseEvent } from "leaflet";
import ItemInterface from "../../interfaces/ItemInterface";
import InitialsInterface from "../../interfaces/UFInitialsInterface";
import InitialCityInterface from "../../interfaces/CityInterfaces";
import { FaSignInAlt } from "react-icons/fa";

const Registre = () => {
  const [Ritems, setRitems] = useState<ItemInterface[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [uf, setUF] = useState<string>("0");
  const [city, setCity] = useState<string>("0");
  const [items, setItems] = useState<number[]>([]);
  const [initials, setInitials] = useState<string[]>([]);
  const [initialsCity, setInitialsCity] = useState<string[]>([]);
  const [message, setMessage] = useState(<></>);

  const getDataByMyAPI = async () => {
    const response = await api.get("/items");
    setRitems(response.data);
  };

  const getDataByIBGEAPI = async () => {
    const response = await axios.get<InitialsInterface[]>(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    );

    const ufs = response.data.map((uf) => uf.sigla);

    setInitials(ufs);
  };

  const getDataByCityAPI = async () => {
    const response = await axios.get<InitialCityInterface[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
    );

    const citys = response.data.map((city) => city.nome);

    setInitialsCity(citys);
  };

  useEffect(() => {
    getDataByMyAPI();
    getDataByIBGEAPI();
  }, []);

  useEffect(() => {
    getDataByCityAPI();
  }, [uf]);

  const handlerMap = (event: LeafletMouseEvent) => {
    setLatitude(event.latlng.lat);
    setLongitude(event.latlng.lng);
  };

  const handlerSelectItems = (id: number) => {
    if (items.includes(id)) {
      const itms = items.filter((item) => item !== id);
      return setItems(itms);
    }
    return setItems([...items, id]);
  };

  const handlerButtonClick = async (event: FormEvent) => {
    try {
      event.preventDefault();

      if (
        name === "" || whatsapp === "" || email === "" || latitude === 0 ||
        longitude === 0 || uf === "0" || city === "0" || items.length === 0
      ) {
        return setMessage(
          <ContainerError>
            Please, complete all the fields to continue with registration
          </ContainerError>,
        );
      }

      await api.post(
        "/ecopoints",
        { email, name, latitude, longitude, uf, city, whatsapp, items },
      );
      return setMessage(
        <ContainerSucess>Success in create a new point</ContainerSucess>,
      );
    } catch (err) {
      return await setMessage(
        <ContainerError>Error in create a new point</ContainerError>,
      );
    }
  };

  return (
    <>
      <Header returnback={true} />
      <Container>
        <form onSubmit={handlerButtonClick}>
          <h1>
            Cadastro do <br /> ponto de coleta
          </h1>
          <br />
          <h2>Dados</h2>
          <input
            type="text"
            placeholder="Nome da entidade "
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)}
            value={name}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)}
            value={email}
          />
          {" "}
          <input
            type="text"
            placeholder="whatsapp"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setWhatsapp(event.target.value)}
            value={whatsapp}
          />
          <section>
            <h2>Endereço</h2>
            <small>Selecione o endereço no mapa:</small>
          </section>
          <Map
            center={[-23.5410653, -46.4128136]}
            zoom={20}
            className="map"
            onClick={handlerMap}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} />
          </Map>
          <select
            name="uf"
            id="uf"
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setUF(event.target.value)}
          >
            <option value={0}>Selecione uma UF</option>
            {initials.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
          </select>
          {" "}
          <select
            name="city"
            id="city"
            onChange={(event) => setCity(event.target.value)}
          >
            <option value={0}>Selecione uma cidade</option>
            {initialsCity.map((nome) =>
              <option key={nome} value={nome}>{nome}</option>
            )}
          </select>
          <h2>Itens de coleta</h2>
          <small>Selecione alguns items de coleta:</small>
          <ul>
            {Ritems.map((item: ItemInterface) =>
              <li
                key={item.id}
                onClick={() => handlerSelectItems(item.id)}
                className={items.includes(item.id) ? "selected" : ""}
              >
                <figure>
                  <img
                    src={`${item.image_url}`}
                    alt={`${item.title}`}
                  />
                </figure>
                <figcaption>{item.title}</figcaption>
              </li>
            )}
          </ul>

          {message}
          <button type="submit">
            <FaSignInAlt />
            {" "}Inserir um novo ponto de coleta
          </button>
        </form>
      </Container>
    </>
  );
};

export default Registre;
