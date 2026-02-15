// Playground component
// Purpose: practice async UI state handling (loading / error / data)
// Not used in production UI. Kept for reference and interview discussion.


import { useEffect, useState } from "react";

type TitleData = { title: string };

function fakeFetchTitle(shouldFail = false, ms = 800): Promise<TitleData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject(new Error("Failed to load title"));
            else resolve({ title: "Success loading" });
        }, ms);
    });
}

function AsyncMessageHandlerExample() {
    const [data, setData] = useState<TitleData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchTitle() {
            setIsLoading(true);
            setError(null);
            setData(null);

            try {
                const result = await fakeFetchTitle(false);
                if (!cancelled) setData(result);
            } catch (e) {
                if (!cancelled) setError((e as Error).message);
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        }

        fetchTitle();
        return () => {
            cancelled = true;
        };
    }, []);

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    if (!data) return null;

    return (
        <div className="system-message">
            <DataTitle title={data.title} />
        </div>
    );
}

function Loading() {
    return <div>Loading...</div>;
}

function ErrorMessage({ message }: { message: string }) {
    return <div>{message}</div>;
}

function DataTitle({ title }: TitleData) {
    return <div>{title}</div>;
}

export default AsyncMessageHandlerExample;
