import { SEO } from '@/SEO'
import { TextInfo, type TextInfoProps } from '@/components/TextInfo'

export const TermsAndConditions = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden  bg-stone-100 ">
      <SEO
        title="Termos e condições - Code Nova"
        description="Termos e condições, Code Nova Soluções sites e apps"
        name="description"
        type="terms"
      />
      <div className="w-full h-[10rem] bg-zinc-700  p-5 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Termos e Condições<span className="text-green-600">.</span>
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
    title: 'Termos e Condições',
    paragraph:
      'Estes termos e condições, estabelecidos nesta página da web, regem o seu uso do site localizado em www.codenova.com.br (o "Site"). Estes Termos e Condições aplicam-se ao seu uso do Site e ao utilizar o Site você expressamente aceita todos os termos e condições aqui contidos. Se você não concorda com estes termos e condições, por favor, não utilize este website. Por favor, leia atentamente estes termos e condições antes de acessar o Site',
  },
  {
    title: 'Direitos de Propriedade Intelectual',
    paragraph: [
      'Todos os direitos de propriedade intelectual e material neste Site são de propriedade da Code Nova, com todos os direitos reservados. Você recebe uma licença limitada para visualizar o material neste Site, sujeito às restrições estabelecidas nestes Termos e Condições',
      'Você não pode republicar, reproduzir, duplicar, vender ou explorar o Site ou seus materiais para qualquer finalidade comercial sem o nosso consentimento expresso por escrito. Elementos do Site são protegidos por leis de propriedade intelectual e não podem ser copiados ou imitados',
      'Gráficos personalizados, ícones e outros elementos do Site são marcas registradas ou vestuário comercial da Code nova Soluções Inc. e não podem ser usados sem permissão expressa por escrito. Embora a Code nova Soluções retenha os direitos autorais em todas as publicações online, os usuários estão autorizados a baixar, copiar e distribuir informações para uso não comercial dentro de suas organizações',
    ],
  },
  {
    title: 'Avisos Legais',
    paragraph:
      'O Site pode conter avisos de propriedade e informações de direitos autorais que os usuários devem respeitar. A Code nova Soluções não é responsável por erros tipográficos ou imprecisões técnicas. As informações estão sujeitas a alterações ou atualizações sem aviso prévio. A Code nova Soluções não deseja receber informações confidenciais ou proprietárias através deste site',
  },
  {
    title: 'Restrições',
    paragraph:
      'Você está expressamente proibido de usar este site de qualquer forma que seja prejudicial, viole quaisquer leis ou regulamentos aplicáveis, ou seja de outra forma objetável para o site, qualquer pessoa ou empresa.',
  },
  {
    title: 'Indenização',
    paragraph:
      'Você deve indenizar e isentar a Code nova Soluções de e contra quaisquer e todas as responsabilidades, custos, reivindicações, causas de ação, danos e despesas decorrentes do seu descumprimento destes Termos e Condições',
  },
  {
    title: 'Relacionamentos Comerciais',
    paragraph:
      'Este site pode conter links para outros sites e a Code nova Soluções não é responsável pelo conteúdo de tais sites',
  },
  {
    title: 'Limitação de Responsabilidade',
    paragraph:
      'As obrigações da Code nova Soluções são regidas por acordos para seus produtos e serviços. Produtos ou serviços obtidos sem um acordo são fornecidos "COMO ESTÃO", sem garantias, e o uso é por sua conta e risco. A Code nova não é responsável por sites não relacionados à Code nova  vinculados a este site. A Code nova não será responsável por quaisquer danos diretos, indiretos, especiais ou consequenciais decorrentes do uso deste site',
  },
  {
    title: 'Modificações',
    paragraph:
      'A Code nova Soluções pode revisar estes Termos e Condições a qualquer momento, e o seu uso continuado após tais revisões constitui aceitação. Qualquer aspecto do Site pode ser alterado a critério exclusivo da Code nova sem aviso prévio',
  },
  {
    title: 'Entre em Contato',
    paragraph:
      'Se você tiver alguma dúvida ou comentário sobre nossos Termos e Condições, por favor, envie um e-mail para adm@Code Nova.com.br',
  },
]
