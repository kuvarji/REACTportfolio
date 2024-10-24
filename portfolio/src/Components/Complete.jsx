

function Complete(props) {
  return (
    <div className="flex w-full justify-center  mt-6">
      <div className="  sm:w-full sm:flex sm:justify-end leading-none pr-2 scroll-smooth">
        <div className="w-[250px] sm:w-[500px] sm:h-[300px] h-[150px] border-2 rounded-md px-1 py-1 bg-slate-200">
          <div className="w-full h-[120px] sm:h-[220px] rounded-md bg-gradient-to-r from-slate-300 to-slate-500">
            <img
              className="object-cover object-center w-full h-[120px] sm:h-[220px] rounded-md"
              src={props.name}
              alt="Full-stack News web"
            />
            <center>
              <h1 className="text-xs font-ralway text-black font-semibold mt-1">
                Full-stack News web
              </h1>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complete
