import { SEO } from '@/SEO'
import { TextInfo, type TextInfoProps } from '@/components/TextInfo'

export const PrivatePolicy = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden  bg-stone-100 ">
      <SEO
        title="Politica de privacidade - Code Nova"
        description="Politica de privacidade, Code Nova Soluções sites e apps"
        name="description"
        type="terms"
      />
      <div className="w-full h-[10rem] bg-zinc-700  p-5 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Politica de Privacidade<span className="text-green-600">.</span>
        </h1>
      </div>

      <article className="my-24">
        {TEXTS.map((el) => (
          <TextInfo {...el} />
        ))}
      </article>
    </main>
  )
}

const TEXTS: TextInfoProps[] = [
  {
    title: 'Politica de Privacidade',
    paragraph:
      'Esta Política de Privacidade delineia as práticas de coleta de dados da Code nova Soluções quando você visita o site www.codenova.com.br, assim como outros sites relacionados (subdomínios), serviços vinculados a esta Política de Privacidade, e todas as comunicações escritas ou verbais (por e-mail, telefone) realizadas com você. Ela descreve as informações coletadas, sua utilização, e seu controle sobre a coleta, correção ou exclusão de dados, além de fornecer informações de contato para esclarecimentos. Nossa política de privacidade tem como prioridade a proteção de suas informações pessoais, comprometendo-nos a usar ou divulgar seus dados apenas conforme descrito nesta Política de Privacidade. Esta política é parte integrante e está sujeita aos Termos e Condições disponíveis no Site. Sugerimos a leitura atenta desta Política de Privacidade antes de utilizar o Site',
  },
  {
    title: 'Informações sobre você',
    paragraph:
      'Utilizamos as informações coletadas para operar e manter nosso Website, fornecer os serviços solicitados, responder a consultas e para outros fins específicos. As informações pessoais podem ser processadas para responder a consultas, agendar reuniões e processar candidaturas a empregos ou relacionamentos comerciais',
  },

  {
    title: 'Quais informações processamos',
    paragraph:
      'Coletamos informações enviadas através do website, formulários de registro e outras fontes, incluindo nome completo, endereço de e-mail, número de telefone e informações adicionais conforme solicitado. Cookies podem ser utilizados para coletar informações anônimas como endereços IP, detalhes do navegador e atividades no site',
  },

  {
    title: 'Seus Direitos',
    paragraph:
      'Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. A Code nova Soluções concorda em fornecer informações pessoais mediante solicitação. Você pode se opor ao marketing direto ou solicitar restrições ao processamento de dados. Se você acredita que seus direitos de privacidade foram violados, pode entrar em contato conosco ou apresentar uma reclamação a uma autoridade de proteção de dados',
  },
  {
    title: 'Serviços Integrados',
    paragraph:
      'Você pode utilizar serviços integrados, como fazer login através de contas de terceiros. Ao autorizar esses serviços, você consente o acesso e armazenamento de informações pessoais relevantes, sujeito a esta Política de Privacidade',
  },

  {
    title: 'Processamento e Transferência',
    paragraph:
      'As informações pessoais podem ser acessíveis a determinados indivíduos envolvidos na operação do Site ou a terceiros que prestam serviços. A Code nova Soluções pode armazenar e processar informações no Brasil. Transferências de informações pessoais serão feitas de acordo com os requisitos legais  para garantir proteção adequada',
  },

  {
    title: 'Retenção de Dados',
    paragraph:
      'As informações pessoais são retidas conforme necessário para os fins especificados, incluindo conformidade legal e regulatória, resolução de disputas e prevenção de abusos',
  },

  {
    title: 'Segurança',
    paragraph:
      'Medidas apropriadas de segurança técnica e física estão em vigor para proteger informações pessoais transmitidas, armazenadas ou processadas contra acesso ou divulgação não autorizados',
  },

  {
    title: 'Outros Websites',
    paragraph:
      'Esta Política de Privacidade se aplica apenas ao site da Code nova Soluções e não a quaisquer websites externos vinculados. A Code nova Soluções não é responsável pelas práticas de privacidade de outros websites',
  },

  {
    title: 'Alterações em nossa Política',
    paragraph:
      'A Code nova Soluções reserva-se o direito de alterar esta Política de Privacidade a seu critério. As alterações serão postadas no Site para manter os usuários informados',
  },

  {
    title: 'Contato',
    paragraph:
      'Se você tiver alguma dúvida, comentário ou solicitação sobre esta Política de Privacidade, envie um e-mail para adm@Code Nova.com.br',
  },
]
