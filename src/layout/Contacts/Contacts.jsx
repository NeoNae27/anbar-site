import "./Contacts.scss";
import Image from "next/image";

// TODO: REWORK THIS COMPONENT

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <div className="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3355.935811621989!2d49.760321!3d40.299592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE3JzU4LjUiTiA0OcKwNDUnMzcuMiJF!5e1!3m2!1sen!2sru!4v1760549307871!5m2!1sen!2sru"
            width="100%"
            
            height="413"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contacts__info">
          <div className="contacts__address">
            <h4 className="contacts__info-title">Rəsmi Məlumatlar</h4>
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
          <div className="contacts__address">
            <h4 className="contacts__info-title">Open Hoursr</h4>
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
