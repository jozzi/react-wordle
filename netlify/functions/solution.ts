import { Handler } from "@netlify/functions";
import { getDailySolution } from "../utils/solution";

const handler: Handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({ solution: getDailySolution() }),
    };
};

export { handler };