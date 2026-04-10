import { motion } from "framer-motion";

export const Skeleton = ({ className }: { className?: string }) => {
    return (
        <div
            className={`relative overflow-hidden bg-gray-200 dark:bg-white/5 ${className}`}
        >
            <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent w-[200%]"
            />
        </div>
    );
};

export const MovieCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-3">
            <Skeleton className="w-full aspect-[2/3] rounded-[2rem]" />
            <Skeleton className="w-3/4 h-5 mt-2 rounded-lg" />
            <Skeleton className="w-1/2 h-4 rounded-lg" />
        </div>
    );
};
