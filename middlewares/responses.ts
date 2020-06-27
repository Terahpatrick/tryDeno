
export default {

  successResponse(data: any[]){
    return {
      status: '000',
      message: 'success',
      data: data,
    }
  },

  errorResponse(description: string){
    return {
      status: '001',
      message: 'error',
      description
    }
  }

}