export type TextInfoProps = {
  title: string
  paragraph: string | string[]
}

export const TextInfo = (props: TextInfoProps) => {
  return (
    <section className="p-5 flex flex-col gap-2 mb-5">
      <div>
        <div className="w-16 border-b-2 border-green-500"></div>
        <h4 className="leading-10 tracking-wider font-bold">{props.title}</h4>
      </div>
      {Array.isArray(props.paragraph) ? (
        props.paragraph.map((el, index) => (
          <span key={index}>
            {el}
            <span className="text-green-600">.</span>
          </span>
        ))
      ) : (
        <span>
          {props.paragraph}
          <span className="text-green-600">.</span>
        </span>
      )}
    </section>
  )
}
