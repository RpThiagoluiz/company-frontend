import { SEO } from '@/SEO'
import { TextInfo, type TextInfoProps } from '@/components/TextInfo'

export const InformationSecurity = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden  bg-stone-100 ">
      <SEO
        title="Segurança da informação - TF Soluções"
        description="Segurança da informação, TF Soluções sites e apps"
        name="description"
        type="terms"
      />
      <div className="w-full h-[10rem] bg-zinc-700  p-5 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Segurança da Informação<span className="text-green-600">.</span>
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
    title: 'Segurança da Informação',
    paragraph: [
      'Nossa abordagem abrangente à segurança combina procedimentos organizacionais e técnicos para garantir a privacidade e manter uma postura robusta de segurança na TF Soluções',
      'No campo da segurança da informação, três elementos críticos guiam o caminho de uma organização: Confidencialidade, Integridade e Disponibilidade. Na TF Soluções, priorizamos a segurança e proteção das informações pessoais de nossos clientes e de nossos funcionários. Trabalhar com clientes globalmente requer que melhoremos continuamente nossas medidas de segurança para atender aos requisitos de segurança contratuais. Nosso compromisso é demonstrado pelo fato de que, até o momento, nunca sofremos uma violação das informações pessoais de nossos clientes',
      'Neste cenário digital em constante evolução, a cibersegurança requer estratégias proativas que vão além de medidas estáticas e reativas. A sofisticação dos ataques digitais requer processos dinâmicos, sistemas de monitoramento proativo e vigilância constante. Todas as nossas medidas de segurança de dados são devidamente documentadas e regularmente atualizadas',
      'Adotamos uma política estrita de segurança da informação alinhada com os padrões de mercado internacionais. Novas práticas são incorporadas conforme necessário para cada cliente e projeto',
      'A conscientização sobre privacidade é um aspecto crítico no contexto atual e a TF Soluções está sintonizada com essa tendência global. Nosso compromisso com a segurança da informação garante uma gestão robusta da privacidade e fornece requisitos e orientações para estabelecer, usar e melhorar práticas de privacidade',
      'Na TF Soluções, vemos a segurança como uma ação, não como uma mercadoria. Testes de penetração independentes anuais fortalecem nossas defesas ao identificar e mitigar potenciais vulnerabilidades. Nossos funcionários são reconhecidos como a primeira linha de defesa, ecoando nosso mantra de segurança de trabalhar juntos para tornar o mundo um lugar mais seguro',
    ],
  },
  {
    title: 'Gerenciamento de Incidentes',
    paragraph:
      'O gerenciamento de incidentes é uma parte integral do framework de segurança da TF Soluções. Uma abordagem proativa inclui análise da causa raiz, avaliações de risco e sessões de aprendizado para fortalecer as defesas e prevenir futuros incidentes. O registro e monitoramento, facilitados pelo Gerenciamento de Informações e Eventos de Segurança (SIEM), fornecem processamento de eventos em tempo real e alertas',
  },
  {
    title: 'Gerenciamento de Mudanças',
    paragraph:
      'O Gerenciamento de Mudanças da TF Soluções garante a implementação controlada de mudanças tecnológicas, reduzindo o risco de interrupções nos negócios. Um processo meticuloso inclui avaliação de riscos, categorização, fluxos de aprovação, comunicação e métricas',
  },
  {
    title: 'Funcionários da Empresa',
    paragraph: [
      'O compromisso da TF Soluções com a segurança começa com nossas pessoas. Nossos valores enfatizam uma cultura orientada para as pessoas e focada no cliente. A segurança é incorporada ao nosso processo de contratação, com revisão cuidadosa de currículos, verificações de antecedentes e verificações adicionais para aqueles que lidam com dados do cliente. Os associados passam por treinamento obrigatório de conscientização de segurança e privacidade ao serem contratados, com atualizações regulares e campanhas de simulação de phishing para reforçar a vigilância',
      'A educação continuada garante que nossas equipes estejam atualizadas sobre as últimas tendências de segurança, com participação em conferências internacionais e certificações profissionais',
    ],
  },
  {
    title: 'Identificação, Autenticação e Autorização',
    paragraph:
      'A TF Soluções implementa controles de gerenciamento de identidade, autenticação e autorização. Ela utiliza autenticação múltipla e controle de acesso baseado em funções (RBAC) para fornecer identificação e autorização seguras',
  },
  {
    title: 'Privacidade',
    paragraph:
      'A TF Soluções prioriza a proteção de dados pessoais e de clientes, e está em conformidade com as regulamentações dos EUA e do Brasil',
  },
  {
    title: 'Resumo',
    paragraph:
      'Na TF Soluções, a segurança não é apenas uma prática; é um compromisso incorporado à nossa cultura, processos e tecnologia. Nossa dedicação aos mais altos padrões garante um ambiente seguro para os dados dos clientes, funcionários e para a empresa como um todo. Conforme crescemos, nosso foco em segurança e privacidade permanece firme, com a melhoria contínua no centro de nossa abordagem',
  },
]
