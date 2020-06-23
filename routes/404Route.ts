
export default (context: any ) => {
    context.response.status = 404;
    context.response.body = {
      error: 'Page Not Found'
    }
  }