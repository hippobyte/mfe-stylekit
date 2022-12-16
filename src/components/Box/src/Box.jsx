function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Box(props) {
  const className = classNames(props.className)
  return (
    <div className={className}>
      {props.children}
    </div>
  )
};