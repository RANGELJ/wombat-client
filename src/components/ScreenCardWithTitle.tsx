type Props = {
  title: string;
  color: 'error' | 'primary';
}

const ScreenCardWithTitle = ({
  title,
  color,
  children,
}: React.PropsWithChildren<Props>) => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="bg-white w-11/12 md:w-1/3 h-3/4 md:h-1/3 shadow-md flex flex-col p-2">
      <h1 className={`text-2xl text-center text-${color}-500`}>{title}</h1>
      <div className="grow flex justify-center items-center">
        {children}
      </div>
    </div>
  </div>
)

export default ScreenCardWithTitle
