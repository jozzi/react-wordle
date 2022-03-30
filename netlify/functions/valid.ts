import { Handler } from "@netlify/functions";
import { VALID_GUESSES } from "../constants/validGuesses";

const handler: Handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({ valid: VALID_GUESSES }),
    };
};

export { handler };