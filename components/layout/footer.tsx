import Image from "next/image"
import Link from "next/link"

import { FaCalendarAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { FaList } from "react-icons/fa";

export default function Footer() {
    
    const instagramLink = "https://www.instagram.com/30gemape/"
    const whatsappLink = "https://wa.me/5581994535323?text=Olá,%20gostaria%20de%20saber%20informações%20do%2030º%20Grupo%20Escoteiro%20Mathias%20de%20Alburquerque!%20"

    return (
        <footer className="flex justify-center items-center flex-col w-full border-t bg-gray-950">
            <section className="flex justify-around items-center h-60 w-full">
                <div className="max-w-100">
                    <div className="flex gap-4">
                        <Image src={'/logo.png'} className="w-auto h-auto" alt="Logo do grupo escoteiro" width={45} height={45}/>
                        <div className="flex flex-col">
                            <h1 className="font-bold">Grupo Escoteiro Mathias de Albuquerque</h1>
                            <p className="text-sm text-gray-400">Sempre Alerta desde 2005</p>
                        </div>
                    </div>
                    <p className="text-[13px] text-gray-500 text-wrap">Grupo escoteiro voluntário em Pernambuco, filiado à União dos Escoteiros do Brasil.</p>
                </div>
                <div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold">Contato</h1>
                        <ul className="flex flex-col gap-1.25">
                            <li className="text-sm"><Link href='/atividades' className="flex items-center gap-1"><FaCalendarAlt size={20} /> Reuniões aos sábados, 09h às 12h</Link></li>
                            <li className="text-sm"><Link href={'/contato'} className="flex items-center gap-1"><FaList size={18} />Quero ir em uma atividades</Link></li>
                            <li className="text-sm"><a href={whatsappLink} target="_blank" className="flex items-center gap-1"><FaWhatsapp  size={20} />(81) 99453-5323</a></li>
                            <li className="text-sm"><a href={instagramLink} target="_blank" className="flex items-center gap-1"><FaInstagram size={20} />@30gemape</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="h-10 border-t border-gray-800 flex justify-center items-center w-full">
                <h1 className="text-[13px]">© 30º Grupo Escoteiro · Sempre Alerta</h1>
            </div>
        </footer>
    )
}