import { Link } from "react-router-dom"


function Complete(props) {
  return (
    <div className="flex w-full justify-center  mt-6">
      <div className="  sm:w-full sm:flex sm:justify-end leading-none pr-2 scroll-smooth">
        <div className="w-[250px] sm:w-[500px] sm:h-[300px] h-[180px] border-2 rounded-md px-1 py-2 bg-slate-200">
          <Link to={props.link}>
          <div className="w-full h-[160px] sm:h-[220px] rounded-md bg-gradient-to-r from-slate-300 to-slate-500">
            <img
              className="object-cover object-center w-full h-[120px] sm:h-[220px] rounded-md"
              src={props.name}
              alt="Full-stack News web"
            />
            <center>
              <h1 className="sm:text-sm text-[10px] font-ralway text-black font-normal mt-4">
                {props.pname}
              </h1>
            </center>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Complete
