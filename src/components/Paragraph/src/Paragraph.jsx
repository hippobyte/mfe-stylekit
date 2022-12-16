function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Parahraph(props) {
  const className = classNames(props.className)
  return (
    <p className={className}>
      {props.children}
    </p>
  )
};