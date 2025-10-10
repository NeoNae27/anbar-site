import "./Contacts.scss";
import Image from "next/image";

// TODO: REWORK THIS COMPONENT

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts-container">
        <div className="contacts-map">
          <Image
            src="/imgs/map.png"
            alt="map"
            width={475}
            height={413}
            unoptimized
          />
        </div>
        <div className="contacts-info">
          <div className="contacts-address">
            <h4 className="contacts-info-title">Rəsmi Məlumatlar</h4>
            <div className="info-element">
              <Image
                src="/icons/addres.svg"
                alt="icon"
                width={48}
                height={48}
                unoptimized
              ></Image>
              <p className="info-text body1">
                Bakı şəhəri, Qaradağ rayonu, Bakı – Salyan şossesi, 15 km
              </p>
            </div>
            <div className="info-element">
              <Image
                src="/icons/call-color.svg"
                alt="icon"
                width={48}
                height={48}
                unoptimized
              ></Image>
              <p className="info-text body1">+994554441212</p>
            </div>
          </div>
          <div className="contacts-address">
            <h4 className="contacts-info-title">Open Hoursr</h4>
            <div className="info-element">
              <Image
                src="/icons/time.svg"
                alt="icon"
                width={48}
                height={48}
                unoptimized
              ></Image>
              <p className="info-text body1">
                Bazar ertəsi- Şənbə: 08:00 – 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
