import React from "react";
import { Button, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Menu({ ...props }: Props) {
  return (
    <header {...props} className={`${props.className} w-[92%] md:w-full`}>
      <div className="flex w-full items-center justify-between gap-5 md:flex-col sm:gap-[18px]">
        <Img src="images/img_capa_1.svg" alt="capaone" className="h-[76px] w-[25%] md:h-[96px] md:w-[300px] sm:w-[85%]" />
        <div className="flex w-[55%] items-center justify-between gap-5 md:mt-2.5 md:w-[90%] sm:w-[300px] sm:grid sm:grid-cols-3  sm:items-center sm:justify-center sm:gap-[18px]">
          <a href="Torneos" target="_blank" rel="noreferrer">
            <Heading as="h6">Torneos</Heading>
            <div className="hidden sm:flex h-[2px] w-[40%] bg-amber-400"></div>
          </a>
          <a href="Alquiler" target="_blank" rel="noreferrer" className="mb-1.5 self-end md:mb-0.5 sm:mt-1.5">
            <Heading as="h6">Alquiler</Heading>
            <div className="hidden sm:flex h-[2px] w-[40%] bg-amber-400"></div>
          </a>
          <a href="Eventos" target="_blank" rel="noreferrer">
            <Heading as="h6">Eventos</Heading>
            <div className="hidden sm:flex h-[2px] w-[40%] bg-amber-400"></div>
          </a>
          <a href="Calendario" target="_blank" rel="noreferrer">
            <Heading as="h6">Calendario</Heading>
            <div className="hidden sm:flex h-[2px] w-[40%] bg-amber-400"></div>
          </a>
          <a href="Tienda" target="_blank" rel="noreferrer">
            <Heading as="h6">Tienda</Heading>
            <div className="hidden sm:flex h-[2px] w-[40%] bg-amber-400"></div>
          </a>
          <Button
            color="green_400"
            leftIcon={<Img src="images/img_volume.svg" alt="volume" className="h-[24px] w-[24px]" />}
            className="min-w-[147px] gap-1 rounded-[20px] sm:hidden"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </header>
  );
}
