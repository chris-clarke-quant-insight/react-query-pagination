import { errorHandler } from '.';

export { apiHandler };

function apiHandler(handler) {
    return async (req, res) => {
        const method = req.method.toLowerCase();
        console.log(req,res);
        // check handler supports HTTP method
        if (!handler[method? method : 'get'])
            return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            // await jwtMiddleware(req, res);

            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    }
}