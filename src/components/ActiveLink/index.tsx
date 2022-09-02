import { ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

//Vai estender também o ...rest das propriedades do Link.
interface ActiveLinkProps extends LinkProps{
  children: ReactElement
  activeClassName: string;
}

const ActiveLink = ({children, activeClassName, ...rest}:ActiveLinkProps) => {
  const { asPath } = useRouter();  // /algumaCoisa
  
  const className = asPath === rest.href ? activeClassName : ''
  // Se a rota/pagina que estamos acessando for igual ao link que ele clicou, então ativamos o Active Class.
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}

export default ActiveLink