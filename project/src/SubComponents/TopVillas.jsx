import React from "react";
import { villas } from "../villas";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";

const TopVillas = () => {
  return (
    <>
      <section id="topVillas">
        <h1>TOP PICK VILLAS</h1>
        <p>
        Discover our top villa rentals, handpicked for their exceptional quality, unique features, and prime locations. Whether you're looking for a beachfront retreat, a countryside manor, or a mountain lodge, our top villas offer the ultimate in comfort and luxury. With spacious living areas, top-of-the-line amenities, and breathtaking views, these villas are the perfect choice for families, groups, or anyone seeking a one-of-a-kind vacation experience. Browse our collection and start planning your dream getaway today.
        </p>

        <div className="villasContainer">
          {villas.slice(0,3).map((element) => {
            return (
              <Link className="card" to={`/villa/${element.id}`} key={element.id}>
                
                {/* here villa stay static and id will be dynamic */}
                <img src={element.image} alt={element.name} />
                <div className="location text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="tittle text">{element.name}</div>
                <div className="specification">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squareMeter}</span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopVillas;
