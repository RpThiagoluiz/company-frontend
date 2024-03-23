export function Description() {
  return (
    <section className="p-20 mt-20 flex flex-col justify-center items-center 2xl:grid 2xl:grid-cols-3 gap-14">
      <p className="2xl:col-span-2 text-zinc-700 text-md 2xl:text-xl 2xl:px-60 2xl:leading-8 2xl:tracking-wider">
        A <span className="text-green-600 font-bold">Code Nova</span> é uma
        potência tecnológica de destaque, especializada em transformações
        digitais completas e estratégias de crescimento de equipe. Oferecemos
        serviços remotos de tecnologia e temos profissionais de elite em mais de
        diversas áreas de tecnologia. Nossa experiência orienta empresas pela
        complexa jornada digital, colocando-as na vanguarda do progresso
        tecnológico. Como líderes em tecnologia, integramos soluções de ponta,
        desde a concepção até a implementação, para posicionar empresas na
        vanguarda do mercado. Nosso compromisso ultrapassa barreiras, unindo
        talentos globais para enfrentar desafios e aproveitar oportunidades,
        criando um ambiente propício para a realização de ideias inovadoras.
      </p>

      <div className="flex flex-col items-center justify-center gap-8 ">
        <img
          src="https://github.com/RpThiagoluiz.png"
          alt="Thiago Luiz - Owner photo"
          className="rounded-full h-[15rem] drop-shadow-black"
        />

        <div className="flex flex-col items-center">
          <h4 className="text-zinc-700 font-bold">Thiago Luiz Gonçalves</h4>
          <span className=" text-sm font-bold">CEO and founder</span>
        </div>
      </div>
    </section>
  )
}
