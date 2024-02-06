import React from 'react'
import angularIcon from '../../../images/TF/techs/angular.svg'
import awsIcon from '../../../images/TF/techs/aws.svg'
import bootstrapIcon from '../../../images/TF/techs/bootstrap.svg'
import fireBaseIcon from '../../../images/TF/techs/firebase.svg'
import goLangIcon from '../../../images/TF/techs/goLang.svg'
import googleCloudIcon from '../../../images/TF/techs/googleCloud.svg'
import javaIcon from '../../../images/TF/techs/java.svg'
import javascriptIcon from '../../../images/TF/techs/javascript.svg'
import nextJsIcon from '../../../images/TF/techs/nextjs.svg'
import nodeIcon from '../../../images/TF/techs/nodejs.svg'
import pythonIcon from '../../../images/TF/techs/python.svg'
import reactJsIcon from '../../../images/TF/techs/reactjs.svg'
import storybookIcon from '../../../images/TF/techs/storybook.svg'
import styledIcon from '../../../images/TF/techs/styled.svg'
import tailwindIcon from '../../../images/TF/techs/tailwind.svg'
import typescriptIcon from '../../../images/TF/techs/typescript.svg'

const ICONS = [
  { src: awsIcon, alt: 'aws icon' },
  { src: googleCloudIcon, alt: 'google cloud icon' },
  { src: fireBaseIcon, alt: 'firebase icon' },
  {
    src: goLangIcon,
    alt: 'go lang icon',
  },
  {
    src: nodeIcon,
    alt: 'node js icon',
  },
  {
    src: angularIcon,
    alt: 'angular icon',
  },
  { src: reactJsIcon, alt: 'react js icon' },
  { src: nextJsIcon, alt: 'next js icon' },
  { src: javaIcon, alt: 'java icon' },
  { src: javascriptIcon, alt: 'javascript icon' },
  { src: typescriptIcon, alt: 'typescript icon' },
  {
    src: pythonIcon,
    alt: 'python icon',
  },
  {
    src: storybookIcon,
    alt: 'story book icon',
  },
  {
    src: styledIcon,
    alt: 'styled components icon',
  },
  { src: tailwindIcon, alt: 'tailwind css icon' },
  {
    src: bootstrapIcon,
    alt: 'bootstarp icon',
  },
] as const

export function TechsCarousel(props: {
  extraStyles?: React.ComponentProps<'div'>['className']
}) {
  return (
    <article
      className={`flex overflow-hidden space-x-16 bg-zinc-100 py-8 ${props.extraStyles}`}
    >
      <IconsLoop />
      <IconsLoop />
    </article>
  )
}

const IconsLoop = () => (
  <section className="flex space-x-16 animate-loop-scroll">
    {React.Children.toArray(
      ICONS.map((icon) => (
        <img
          loading="lazy"
          src={icon.src}
          className="w-20 h-20 max-w-none"
          alt={icon.alt}
        />
      )),
    )}
  </section>
)
