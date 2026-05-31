import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "unable to find token"
        })
    }

    try {
        const decode = jwt.verify(
            token,
            process.env.SECRET_KEY
        )

        req.user = decode

        next()

    }   catch (err) {
        return res.status(500).json({
            message: "unable to verify token"
        })
    }
}

export default authMiddleware