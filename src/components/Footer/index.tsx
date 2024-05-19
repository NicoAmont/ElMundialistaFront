import React from "react";
import { Text, GoogleMap, Heading, Img } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex items-center justify-center self-stretch bg-indigo-900 p-[50px] md:flex-col md:p-5">
        <div className="flex w-[31%] flex-col gap-[25px] md:w-full">
          <Img src="images/img_capa_1_white_a700.svg" alt="capaone" className="h-[56px] w-[77%]" />
          <Text as="p" className="leading-[25px]">
            Tu destino número uno para experimentar la pasión del fútbol en canchas sintéticas.
          </Text>
        </div>
        <div className="ml-[114px] flex w-[30%] flex-col items-start gap-4 md:ml-0 md:w-full">
          <Heading as="h6">Contacto</Heading>
          <div className="flex w-[88%] flex-col gap-[7px] md:w-full">
            <div className="flex items-center gap-2.5 self-start">
              <Img src="images/img_volume_green_400.svg" alt="volume" className="h-[24px] w-[24px]" />
              <Text as="p" className="self-end">
                +57 000000 0000
              </Text>
            </div>
            <div className="flex items-center gap-2.5 self-start">
              <Img src="images/img_lock.svg" alt="lock" className="h-[24px] w-[24px] self-start" />
              <Text as="p" className="self-end">
                sample@email.com
              </Text>
            </div>
            <div className="flex items-center gap-2.5 self-start">
              <Img src="images/img_mdi_location.svg" alt="mdilocation" className="h-[24px] w-[24px]" />
              <Text as="p" className="self-end">
                Calle 18 #13-95
              </Text>
            </div>
          </div>
        </div>
        <div className="flex w-[30%] flex-col items-start gap-[17px] md:w-full">
          <Heading as="h6">Ubicación</Heading>
          <GoogleMap showMarker={false} className="h-[91px] self-stretch" />
        </div>
      </div>
      <div className="flex justify-center self-stretch bg-gray-900 p-[21px] sm:p-5">
        <Text as="p" className="self-end !text-white-A700_01">
          Políticas de privacidad | Términos y condiciones | El Mundialista © Todos los derechos reservados.
        </Text>
      </div>
    </footer>
  );
}
