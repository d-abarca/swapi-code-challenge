import React from "react";

function TokenComponent({onTokenChange}) {
  return (
    <div className='mt-15'>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">Input Token Here</span>
        </div>
        <input type="text" placeholder='Token' className="form-control" id="basic-url" aria-describedby="basic-addon3" />
      </div>
    </div>
  )
}

export default TokenComponent
