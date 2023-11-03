import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: ReactNode,
    className?: string 
}

const GridContainer = ({ children, className }: GridContainerProps): ReactNode => {
    const defaultClass = "w-full max-w-grid mx-auto px-3";
    const combinedClasses = twMerge(defaultClass, className);

    return (
        <div className={combinedClasses}>
            {children}
        </div>
    );
};

export default GridContainer;
