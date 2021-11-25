const errorHandler = (err, req, next) => {
    const status = err.status || 500;
    console.error(err);
    //implemante logger here

    res.status(status).json(err.message);
}

export default errorHandler;
