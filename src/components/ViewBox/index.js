import React, { lazy, Suspense, useState, useTransition } from "react";
import styles from "./index.module.css";

const VIEWS = {
    VIEW_1: "VIEW_1",
    VIEW_2: "VIEW_2",
};

const PreTransitionView = lazy(() => import("../PreTransitionView"));
const PostTransitionView = lazy(() => import("../PostTransitionView"));

export const ViewBox = () => {
    // Handler to trigger the transition
    // Transition hook
    // Internal state to decide what view to show
    const [view, setView] = useState(VIEWS.VIEW_1);
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        // With Transition
        startTransition(() => {
            if (view === VIEWS.VIEW_1) {
                setView(VIEWS.VIEW_2);
            } else {
                setView(VIEWS.VIEW_1);
            }
        });
        // Without Transition
        // if (view === VIEWS.VIEW_1) {
        //     setView(VIEWS.VIEW_2);
        // } else {
        //     setView(VIEWS.VIEW_1);
        // }
    };
    // Switch network to 3G in Chrome and observe these state/transition changes relative to the UI
    // When setView completes, startTransition assumes 'transition is done' and sets isPending to false
    // But when recalculating the VDOM, we hit a lazy component, so React suspended the render until import finished
    // Something about state updates inside startTransition marks them as a 'transition update' maybe?
    return (
        <>
            <button className={styles.button} onClick={handleClick}>
                Swap View
            </button>
            <div className={styles.card}>
                <Suspense fallback="loading...">
                    {view === VIEWS.VIEW_1 ? (
                        <PreTransitionView />
                    ) : (
                        <PostTransitionView />
                    )}
                </Suspense>
            </div>
            {isPending && (
                <p className={styles.transitionPopup}>
                    <b>NOTICE: You've triggered a transition. Please wait...</b>
                </p>
            )}
        </>
    );
};
