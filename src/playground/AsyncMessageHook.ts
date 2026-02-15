import { useCallback, useEffect, useRef, useState } from "react";

type AsyncState<T> =
    | { status: "idle" | "loading"; data: null; error: null }
    | { status: "success"; data: T; error: null }
    | { status: "error"; data: null; error: Error };

export function useAsync<T>(
    task: () => Promise<T>,
    deps: unknown[]
) {
    const [state, setState] = useState<AsyncState<T>>({
        status: "idle",
        data: null,
        error: null,
    });

    const requestIdRef = useRef(0);

    const run = useCallback(() => {
        const requestId = ++requestIdRef.current;

        setState({ status: "loading", data: null, error: null });

        task()
            .then((data) => {
                if (requestId !== requestIdRef.current) return;
                setState({ status: "success", data, error: null });
            })
            .catch((err) => {
                if (requestId !== requestIdRef.current) return;
                const error = err instanceof Error ? err : new Error("Unknown error");
                setState({ status: "error", data: null, error });
            });
    }, [task]);

    useEffect(() => {
        run();
    }, deps); // deps choice from client

    return {
        state,
        retry: run,
        isLoading: state.status === "loading" || state.status === "idle",
        isError: state.status === "error",
        isSuccess: state.status === "success",
    };
}
