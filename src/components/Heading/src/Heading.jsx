const headings = {
  h1: <h1 />,
  h2: <h2 />,
  h3: <h3 />,
  h4: <h4 />,
  h5: <h5 />,
  h6: <h6 />
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Heading(props) {
  if (props.tag === "h1") {
    const className = classNames(props.className)
    return <h1 className={className}>{props.children}</h1>
  }

  if (props.tag === "h2") {
    const className = classNames(props.className)
    return <h2 className={className}>{props.children}</h2>
  }

  if (props.tag === "h3") {
    const className = classNames(props.className)
    return <h3 className={className}>{props.children}</h3>
  }

  if (props.tag === "h4") {
    const className = classNames(props.className)
    return <h4 className={className}>{props.children}</h4>
  }

  if (props.tag === "h5") {
    const className = classNames(props.className)
    return <h5 className={className}>{props.children}</h5>
  }

  if (props.tag === "h6") {
    const className = classNames(props.className)
    return <h6 className={className}>{props.children}</h6>
  }

  const className = classNames("text-2xl font-semibold", props.className)
  return <h1 className={className}>{props.children}</h1>
};