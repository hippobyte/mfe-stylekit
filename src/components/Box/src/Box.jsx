function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Box(props) {
  const { background, card, style, title, children } = props;
  const className = classNames(props.className, "bg-" + background + "-100")
  
  if (card) {
    return (
      <div 
        style={style}
        className={
          classNames(
            'bg-white border overflow-hidden sm:rounded-lg p-5 mr-4 hover:bg-slate-50 w-80 cursor-pointer inline-block',
            className
          )
        }
      >
        <p className="font-bold text-xl">{title}</p>
        {children}
      </div>
    )
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
};