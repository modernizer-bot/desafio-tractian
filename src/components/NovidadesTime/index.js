import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const NovidadesTime = ()=> {
    return (
        <section className="novidades-time">
            <article className="novidades">
                <h1>
                    Novidades no Blog
                </h1>
                <p>
                    Como selecionar os ativos para o monitoramento online?
                </p>
                <div>linha horizontal</div>
                <p>
                    Saiba como a Ahlstrom Munksjo mudou sua rotina de manutenção
                </p>
                <div>linha horizontal</div>
                <p>
                    TRACTIAN é nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
                </p>
                <div>linha horizontal</div>
                <a href="#" >Ir para o blog <HiOutlineArrowRight /></a>
            </article>
            <article className="time">
                <h1>
                    Faça parte do time!
                </h1>
                <p>
                    Confira as posições abertas e venha fazer parte de um time de alta performance
                </p>
                <a href="#" >Veja nossas vagas <HiOutlineArrowRight /></a>
                <img src="https://imgix.tractian.com/images/leo-e-mih.png?auto=format&fit=max&w=640" alt="Faça parte do time!"/>
            </article>
        </section>
    )
}