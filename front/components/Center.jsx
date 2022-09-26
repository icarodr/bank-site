import React from "react";

const Center = ({titulo, mensagem}) => {
    return(
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] custom-img z-2"/>
            <div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]">
                <h2 className="text-5xl">{titulo}</h2>
                <p className="py-5 text-xl">{mensagem}</p>
                <button className="px-8 py-2 border hover:bg-gray-600/30">Saiba Mais</button>
            </div>
        </div>
    );
}

export default Center;