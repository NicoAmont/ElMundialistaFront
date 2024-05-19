import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, CheckBox, Input, Heading, Text, Slider } from "../components";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

const data = [
  { image: "images/img_rectangle_49.png", canchas: "Canchas" },
  { image: "images/img_rectangle_49_172x244.png", canchas: "Torneos" },
  { image: "images/img_rectangle_49_1.png", canchas: "Cumpleaños" },
  { image: "images/img_rectangle_49_2.png", canchas: "Eventos" },
  { image: "images/img_rectangle_49_3.png", canchas: "Colaboraciones" },
  { image: "images/img_rectangle_49_4.png", canchas: "Tiendas" },
];
const data1 = [
  { tituloartculo: "images/img_unsplash_wu7hye7lzzs.png" },
  { tituloartculo: "images/img_unsplash_wu7hye7lzzs_208x345.png" },
  { tituloartculo: "images/img_unsplash_wu7hye7lzzs_1.png" },
];
const data2 = [
  { image: "images/img_settings.svg", fortyEight: "4/8" },
  { image: "images/img_group_19.svg", fortyEight: "9/16" },
  { image: "images/img_settings_indigo_900.svg", fortyEight: "5/32" },
];
const images = [
  "images/img_unsplash_wu7hye7lzzs.png",
  "images/img_unsplash_wu7hye7lzzs_208x345.png",
  "images/img_unsplash_wu7hye7lzzs_1.png"
];

export default function Home() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>El Mundialista Canchas F5</title>
        <link rel="icon" type="image/jpg" href="/images/simbolElMund.jpg" sizes="16x16" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div>
          <div className="flex h-[auto] items-start justify-between gap-5 bg-[url(/public/images/img_frame_28.png)] bg-cover bg-no-repeat py-[39px] md:h-auto md:flex-col md:pt-0 sm:py-5">
            <div className="mb-[63px] flex w-[93%] flex-col items-end gap-[107px] md:mb-auto md:w-full md:gap-20 md:p-5 sm:w-[Auto%] sm:gap-[53px]">
              <Menu />
              <div className="flex w-[92%] items-center justify-between gap-5 md:w-full md:flex-col md:gap-[86px] sm:gap-[63px]">
                <div className="flex w-[49%] flex-col items-start gap-[18px] md:w-[71%] sm:w-[302px] sm:gap-[15px]">
                  <div className="flex self-center py-[41px] pr-[41px] md:py-5 md:pr-5">
                    <Heading size="3xl" as="h1" className="mt-1.5 !font-oswald uppercase sm:w-[282px]">
                      Participa y gana premios en torneos y eventos 
                    </Heading>
                  </div>
                  <div className="h-[5px] w-[13%] bg-red-700" />
                  <Text as="p" className="w-full leading-[25px]">
                    <>
                      ¡Forma tu equipo y triunfa en nuestras canchas sintéticas!
                      <br />
                    </>
                  </Text>
                  <Button size="sm" shape="round" className="min-w-[179px]">
                    Reservar ahora
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-4 md:w-full">
                <div className="w-full max-w-[674px] mx-auto self-stretch rounded-lg">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      "0": { items: 1 },
                      "550": { items: 1 },
                      "768": { items: 1 },
                      "1050": { items: 1 }
                    }}
                    renderDotsItem={(props: DotsItem) => {
                      return props?.isActive ? (
                        <div className="mr-[13px] h-[8px] w-[30px] rounded bg-amber-400" />
                      ) : (
                        <div className="mr-[13px] h-[8px] w-[8px] bg-white_A700_4c" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e: EventObject) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={images.map((image, index) => (
                      <React.Fragment key={index}>
                        <Img src={image} alt={`Slide ${index + 1}`} className="h-[493px] object-cover" />
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
              </div>
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <div className="flex h-[62px] w-[30%] items-start justify-center bg-[url(/public/images/img_frame_25.svg)] bg-cover bg-no-repeat p-[5px] md:h-auto md:w-full">
                  <Heading
                    size="lg"
                    as="h4"
                    className="mr-[23px] mt-2 sm:mt-0 !font-oswald uppercase !text-white-A700_01 md:mr-0"
                  >
                    TORNEOS EN ESPERA
                  </Heading>
                </div>
                <div className="flex w-[auto] gap-[59px] md:w-full md:flex-row md:items-center md:justify-center sm:w-[237px] sm:flex-col">
                  {data2.map((d, index) => (
                    <div
                      key={"listunirme" + index}
                      className="flex w-[260px] flex-col gap-2.5 rounded-lg bg-white-A700_7f p-5 w-md:w-[240px] md:items-center sm:w-full"
                    >
                      <div className="flex items-center gap-6">
                        <Img src={d.image} alt="image" className="h-[83px] w-[60%]" />
                        <Heading
                          size="2xl"
                          as="h5"
                          className="mb-1 h-[60px] w-[59px] self-end !font-oswald uppercase !text-indigo-900"
                        >
                          {d.fortyEight}
                        </Heading>
                      </div>
                      <Button shape="round" className="w-full sm:px-5">
                        Unirme ahora
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="fixed mt-[283px] flex w-[39px] flex-col md:bottom-0 md:m-auto md:w-[82px] md:items-stretch md:p-[19px] sm:left-0 sm:mt-[83px] sm:w-[80px] sm:p-5">
              <div className="flex justify-center bg-blue-A400 p-2 md:pt-2">
                <Img src="images/img_facebook.svg" alt="facebook" className="h-[19px]" />
              </div>
              <div className="flex bg-purple-400 p-2.5">
                <Img src="images/img_info.svg" alt="info" className="h-[21px] w-[21px]" />
              </div>
              <div className="flex bg-green-400 p-2.5">
                <Img src="images/img_volume.svg" alt="volume" className="h-[20px] w-[20px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 bg-white-A700 px-14 py-[99px] md:flex-col md:items-center md:p-5">
            <div className="flex w-[30%] flex-col items-start gap-3.5 md:w-[84%] sm:w-full">
              <Heading size="xl" as="h2" className="w-full !font-oswald uppercase leading-[47px] !text-indigo-900">
                <>
                  ¡Bienvenido a<br />
                  El Mundialista!
                </>
              </Heading>
              <div className="h-[5px] w-[19%] bg-red-700" />
              <Text as="p" className="w-full leading-[25px] !text-gray-900 md:w-[61%] sm:w-[343px]">
                <span className="text-lg font-semibold text-gray-900">
                  <>
                    ¡Tu destino número uno para experimentar la pasión del fútbol en canchas sintéticas de primer nivel!
                    <br />
                  </>
                </span>
                <span className="text-gray-900">
                  <>
                    <br />
                    Nos dedicamos a ofrecerte una experiencia inigualable en alquiler de canchas, ya sea para eventos,
                    torneos, actividades corporativas o simplemente para divertirte con amigos y familiares. Desde
                    torneos emocionantes hasta cumpleaños inolvidables, en El Mundialista lo tenemos todo cubierto.
                  </>
                </span>
              </Text>
              <Button shape="round" className="min-w-[149px]">
                Reservar ahora
              </Button>
            </div>
            <div className="grid w-[63%] grid-cols-3 gap-5 md:grid-cols-2 md:gap-[27px] sm:grid-cols-1">
              {data.map((d, index) => (
                <div key={"gridcanchas" + index} className="flex w-full flex-col rounded-lg bg-white-A700_7f">
                  <Img src={d.image} alt="image" className="h-[172px] rounded-tl-lg rounded-tr-lg object-cover" />
                  <Button color="light_blue_900" size="md" shape="square" className="w-full sm:px-5">
                    {d.canchas}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 px-14 py-24 md:p-5">
            <div className="mx-auto flex w-full max-w-[885px] flex-col items-center gap-4">
              <Heading size="xl" as="h2" className="!font-oswald uppercase !text-indigo-900">
                PRÓXIMOS EVENTOS
              </Heading>
              <div className="h-[5px] w-[8%] bg-red-700" />
              <Heading size="s" as="h3" className="!text-gray-900">
                ¡Tu destino número uno para experimentar la pasión del fútbol en canchas sintéticas de primer nivel!
              </Heading>
              <Button shape="round" className="min-w-[197px]">
                Ver todos los eventos
              </Button>
            </div>
            <div className="container-xs mb-[3px] flex rounded-lg md:flex-col">
              <Img
                src="images/img_rectangle_47_302x793.png"
                alt="image"
                className="h-[302px] w-[68%] object-cover md:w-full"
              />
              <div className="flex w-[32%] flex-col items-start justify-center gap-[22px] bg-indigo-900 p-5 md:w-full">
                <Heading size="lg" as="h4" className="mt-[61px] !font-oswald uppercase">
                  13 DE MARZO 2024
                </Heading>
                <Text as="p">19:00 hrs</Text>
                <Heading size="s" as="h5" className="mb-[62px]">
                  Nombre del evento
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex h-[601px] flex-col items-center justify-center bg-[url(/public/images/img_frame_33.png)] bg-gradient bg-cover bg-no-repeat p-[46px] md:h-auto md:p-5">
            <div className="container-xs mb-[3px] flex flex-col gap-[52px] sm:gap-[26px]">
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <div className="flex">
                  <Heading size="xl" as="h2" className="!font-oswald uppercase !text-indigo-900">
                    Últimas noticias
                  </Heading>
                </div>
                <Button shape="round" className="mb-0.5 min-w-[129px] self-end">
                  Ver artículos
                </Button>
              </div>
              <div className="flex gap-[65px] md:flex-col">
                {data1.map((d, index) => (
                  <div key={"listtitulo" + index} className="flex w-full flex-col">
                    <Img src={d.tituloartculo} alt="titulo_artículo" className="h-[208px] object-cover" />
                    <div className="flex flex-col items-start gap-3.5 bg-white-A700 p-[29px] sm:p-5">
                      <Heading size="md" as="h3" className="!font-lexend !text-gray-900">
                        Titulo artículo
                      </Heading>
                      <Text as="p" className="w-full !font-lexend leading-5 !text-gray-900">
                        Lorem ipsum dolor sit amet consectetur. Etiam sit sollicitudin et vitae dolor varius.{" "}
                      </Text>
                      <div className="flex items-center gap-1.5">
                        <Heading size="s" as="h4" className="!font-lexend !text-black-900">
                          Ver detalles
                        </Heading>
                        <Img src="images/img_arrow_right.svg" alt="ver_detalles" className="h-[10px] w-[10px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[43px] bg-white-A700_01 pl-[95px] md:flex-col md:pl-5">
            <div className="flex w-[45%] flex-col items-start md:w-full">
              <Heading size="xl" as="h2" className="!font-oswald uppercase !text-indigo-900">
                CONTÁCTANOS
              </Heading>
              <div className="mt-2.5 h-[5px] w-[13%] bg-red-700" />
              <Input shape="square" name="input_one" placeholder={`Nombre`} className="mt-[3px] self-stretch" />
              <Input shape="square" name="input_three" placeholder={`Teléfono`} className="mt-2 self-stretch" />
              <Input
                shape="square"
                name="input_five"
                placeholder={`Correo electrónico`}
                className="mt-2 self-stretch"
              />
              <div className="mt-2 self-stretch pt-3">
                <div className="pb-3">
                  <Input size="xs" variant="outline" shape="square" name="textfield" placeholder={`Mensaje`} />
                </div>
              </div>
              <CheckBox
                name="computer"
                label="Acepto los términos y condiciones de El Mundialista."
                id="computer"
                className="mt-2 gap-2 rounded py-[15px] pr-4 font-inter text-sm tracking-[0.50px] text-gray-800"
              />
              <Button shape="round" className="mt-2 min-w-[79px]">
                Enviar
              </Button>
            </div>
            <div className="relative h-[605px] flex-1 md:w-full md:flex-none md:self-stretch">
              <Img
                src="images/img_rectangle_31.png"
                alt="image"
                className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[605px] w-[58%] object-cover"
              />
              <Img
                src="images/img_slice_3_1_1.png"
                alt="slice31one"
                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[461px] w-[85%] rounded-lg object-cover"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
