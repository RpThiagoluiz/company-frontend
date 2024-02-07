import awsIcon from '../../../images/TF/techs/aws-colored.svg'
import googleCloudIcon from '../../../images/TF/techs/google-cloud-colored.svg'
import azureIcon from '../../../images/TF/techs/azure-colored.svg'
import playStoreIcon from '../../../images/TF/techs/google-play-colored.svg'
import appStoreIcon from '../../../images/TF/techs/app-store-colored.svg'

export function Cloud() {
  return (
    <article className="h-3/4 w-full clip-path-reverse-ellipse xl:px-20 p-5">
      <section className="xl:py-40 p-5">
        <h1 className="text-left leading-10 tracking-wider text-3xl font-bold text-white">
          Hospedagem
          <span className="text-green-600 font-bold text-3xl">.</span>
        </h1>

        <section className="2xl:grid 2xl:grid-cols-2 flex flex-col gap-5 items-center justify-around mt-16">
          <div className="flex flex-row items-center justify-evenly xl:gap-20 gap-10 flex-wrap ">
            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src={awsIcon}
                className="w-24 h-24 max-w-none"
                alt="AWS logo"
              />
              <span className="mt-2">Amazon Web Services</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src={googleCloudIcon}
                className="w-24 h-24 max-w-none drop-shadow-black"
                alt="google cloud logo"
              />

              <span className="mt-2">Google cloud</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src={azureIcon}
                className="w-24 h-24 max-w-none  drop-shadow-black"
                alt="microsoft azure logo"
              />
              <span className="mt-2">Microsoft azure</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src={appStoreIcon}
                className="w-24 h-24 max-w-none drop-shadow-black"
                alt="apple app store logo"
              />
              <span className="mt-2">Apple store</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src={playStoreIcon}
                className="w-24 h-24 max-w-none  drop-shadow-black"
                alt="google play store logo"
              />
              <span className="mt-2">Google play store</span>
            </div>
          </div>

          <div className="px-5 py-3 xl:pb-6 xl:border-l xl:border-t-0 border-t border-solid border-green-700">
            <p className="text-white leading-8 tracking-wider text-md">
              Excelência tecnológica, escolhemos as plataformas líderes do
              setor, Google Cloud, AWS e Azure, para hospedar nossos serviços e
              aplicativos. Com o Google Cloud, desfrutamos de uma infraestrutura
              global confiável e uma ampla gama de serviços de última geração. A
              AWS nos oferece flexibilidade e escalabilidade incomparáveis,
              enquanto o Azure nos fornece uma plataforma robusta e integrada.
              Ao optar por essas soluções de hospedagem de classe mundial,
              estamos posicionando nossa empresa para inovação contínua,
              eficiência operacional e sucesso duradouro. Além disso, garantimos
              presença tanto na Play Store, para dispositivos Android, quanto na
              App Store, para dispositivos Apple, ampliando nosso alcance e
              acessibilidade para uma base diversificada de usuários em ambas as
              plataformas móveis
              <span className="text-green-600 font-bold text-3xl">.</span>
            </p>
          </div>
        </section>
      </section>
    </article>
  )
}
