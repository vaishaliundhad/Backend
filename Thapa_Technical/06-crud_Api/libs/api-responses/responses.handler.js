//success
export const successResponse = (response , data , msg="success")=>{
    return response.status(200).json({
        success:true,
        msg,
        data
    });
};

//created
export const createResponse = (response , data , msg ="created")=>{
    return response.status(201).json({
        success:true,
        msg,
        data
    })
}

//validation
export const validationError = (response , error , msg="validation Error")=>{
    return response.status(400).json({
        success:false,
        msg,
        error
    })
}

//not found response
export const notFoundResponse = (response , msg="Not Found")=>{
    return response.status(404).json({
        success:false,
        msg
    })
}

//somethig went wrong
export const  errorResponse = (response , error , msg="something went wrong")=>{
    return response.status(500).json({
        success:false,
        msg,
        error
    })
}

export const unauthorizedResponse = (response, message) => {
    return response.status(401).json({
      error: message || "Unauthorized access"
    });
  };
  