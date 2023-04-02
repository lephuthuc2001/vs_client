import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { faker } from "@faker-js/faker";
import BreadCrums from "../components/BreadCrums";

const ProfilePage = () => {
  const { user } = useAuth();

  const { name, email, address, phone } = user;
  return (
    <>
      <BreadCrums pages={[{ name: "My Profile" }]} />
      <div className="hero min-h-full">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={faker.image.avatar()}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold mb-2 ">{name}</h1>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <p>{email}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2" />
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
