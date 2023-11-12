import { ReactNode } from "react";
import GridContainer from "./grid";
import Image from 'next/image';
import IconFile from '/public/icon-file.svg';
import IconHand from '/public/icon-hand.svg';
import IconHand02 from '/public/icon-hand-02.svg';
import IconMockup from '/public/mockup.svg';

const SectionHero = (): ReactNode => {
    return (
        <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xl font-medium text-green-actived mb-4" >Novo curso focado em instagram</h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex item-center gap-2">
                            <Image
                                src={IconFile}
                                alt={'assign-icon'}
                            />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-4 px-5 bg-green-button rounded-full text-green-primary font-bold">
                            Comecar agora
                        </button>
                    </div>
                </div>
                <div className="relative w-full max-w-area-icons h-28 mt-4">
                    <Image
                        src={IconHand}
                        alt={'hand-icon'}
                        className="absolute bottom-0 left-0"
                    />
                    <Image
                        src={IconHand02}
                        alt={'hand-02-icon'}
                        className="absolute top-0 right-0"
                    />
                </div>
                <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
                    <Image
                        src={IconMockup}
                        alt={'mockup-icon'}
                        className="relative -rotate-12 top-[18px] left-[53px]"
                    />
                    <Image
                        src={IconMockup}
                        alt={'mockup-icon'}
                        className="relativ rotate-12 top-[18px] right-[53px]"
                    />
                </div>
            </GridContainer>
        </section>
    )
};

export default SectionHero;
