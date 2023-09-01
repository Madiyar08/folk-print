import styles from "../styles/Footer.module.scss";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  const date = new Date();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img
                src="https://i.postimg.cc/rsHQKPnd/001.png"
                alt="logo"
                className="w-[180px] h-[80px] md-w-[200px] md-h-[60px] lg-w-[200px] lg-h-[60px] cursor-pointer active:scale-95 duration-200"
              />

              <div className={styles.socialIcons}>
              <div>
                <a href="https://t.me/folkprint_uz">
                <FaTelegram className="w-10 h-10 cursor-pointer active:scale-95 duration-200" />
                </a>
              </div>
              <div>
                <a href="https://t.me/Folkprintme">
                <FaFacebook className="w-10 h-10 cursor-pointer active:scale-95 duration-200" />
                </a>
              </div>
              <div>
              <a href="https://www.instagram.com/folkprint.uz/">
                <FaInstagram className="w-10 h-10 cursor-pointer active:scale-95 duration-200" />
                </a>
              </div>
              </div>
            </div>
            <div className={styles.address}>
              <p>
                Адрес: ул. Фуркат 1, Тошкент, Узбекистан. Ориентир: Боги-Чинор
                кафе
              </p>
              <a href="#map">Показать на карте</a>
            </div>
            <div className={styles.contact}>
              <h1>
                Наш номер:
                <span>
                  <a href="tel:+998 33 338 86 08">+998 33 338 86 08</a>
                </span>
              </h1>
              <h1>
                Присылайте заявки на
                <span className="ml-3">
                  <a href="https://t.me/Folkprintme">folkprint.uz</a>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[100%] bg-gray-900 mt-3 md:mt-10 leading-6 lg:mt-10  mx-auto text-white  md:flex  lg:flex justify-between p-5 px-8">
          <p>Все права защищены &copy; {date.getFullYear()} Folk Print</p>
          <p>
            Сайт разработал
            <a href="https://t.me/just_17s" className="text-yellow-300 mx-1">
              Shoaziz
            </a>
            и
            <a
              href="https://t.me/menenbarisuraid_12"
              className="text-yellow-300 "
            >
              Madiyar
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
