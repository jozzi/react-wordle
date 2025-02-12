import { useEffect, useState } from "react"
import { localeAwareUpperCase } from "../lib/words";

let solution = "";

export const useSolution = () => {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<string>("");

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/solution`);
                const json = await response.json();
                solution = localeAwareUpperCase(json.solution);
                setResults(solution);

            } catch (e) {
                console.error(e);
                setResults("WORDS")
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return [loading, results] as const;
}

export const getSolution = () => solution;