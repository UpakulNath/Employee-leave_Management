const adminMiddleware = (req, res, next) => {
    const role = req.user.role

    if(role === "admin"){
        next()
    }else{
        return res.status(403).json({
            success: false,
            message: "Access denied.",
        })
    }
}

export default adminMiddleware;